import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';

import config from './config';
import { areaLogger } from './logger';

const logger = areaLogger('token-utils');

export const TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';
const HOUR = 60_000;
const DAY = 86_400_000;
const cookieOptions = {
  httpOnly: true,
  sameSite: 'strict',
  secure: true,
} as const;

export const parseToken = (token: string) => {
  if (!config.authSecreteKey) {
    logger.error('Missing config.authSecreteKey');
    return null;
  }

  try {
    const data = jwt.verify(token, config.authSecreteKey) as Record<string, number>
    if (!data.userId) return null;
    return data.userId;
  } catch (e) {
    return null;
  }
};

export const generateTokens = (userId: number) => {
  if (!config.authSecreteKey) {
    logger.error('Missing config.authSecreteKey');
    return null;
  }

  const data = { userId, ts: Number(new Date()) };
  const token = jwt.sign(data, config.authSecreteKey, { expiresIn: HOUR });
  const refreshToken = jwt.sign(data, config.authSecreteKey, { expiresIn: DAY });

  return { token, refreshToken };
};

export const setTokenCookies = (
  res: CreateExpressContextOptions['res'],
  tokens: { token: string, refreshToken: string },
) => {
  res.cookie(TOKEN_KEY, tokens.token, { maxAge: DAY, ...cookieOptions });
  res.cookie(REFRESH_TOKEN_KEY, tokens.refreshToken, { maxAge: DAY, ...cookieOptions });
};

export const dropTokenCookies = (res: CreateExpressContextOptions['res']) => {
  res.cookie(TOKEN_KEY, '', { expires: new Date(), ...cookieOptions });
  res.cookie(REFRESH_TOKEN_KEY, '', { expires: new Date(), ...cookieOptions });
};
