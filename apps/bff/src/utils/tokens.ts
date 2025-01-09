import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';

import config from './config';
import { areaLogger } from './logger';

export const TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-access-token';
const HOUR = 60_000;
const DAY = 86_400_000;

export const parseToken = (token: string) => {
  const logger = areaLogger('parse-token');
  if (!config.authSecreteKey) {
    logger.error('Missing config.authSecreteKey');
    return null;
  }

  try {
    const data = jwt.verify(token, config.authSecreteKey) as Record<string, number>
    if (!data.userId) return null;
    return data.userId;
  } catch (e) {
    return null
  }
};

export const generateTokens = (userId: number) => {
  const logger = areaLogger('generate-token');
  if (!config.authSecreteKey) {
    logger.error('Missing config.authSecreteKey');
    return null;
  }

  const data = {
    userId,
    ts: Number(new Date()),
  }

  const token = jwt.sign(data, config.authSecreteKey, { expiresIn: HOUR });
  const refreshToken = jwt.sign(data, config.authSecreteKey, { expiresIn: DAY });

  return { token, refreshToken };
};

export const setTokenCookies = (
  res: CreateExpressContextOptions['res'],
  tokens: {token: string, refreshToken: string}
) => {
  res.cookie(TOKEN_KEY, tokens.token, { maxAge: DAY, httpOnly: true, sameSite: 'lax' });
  res.cookie(REFRESH_TOKEN_KEY, tokens.refreshToken, { maxAge: DAY, httpOnly: true, sameSite: 'lax' });
}

export const dropTokenCookies = (res: CreateExpressContextOptions['res']) => {
  res.cookie(TOKEN_KEY, '', { expires: new Date(), httpOnly: true });
  res.cookie(REFRESH_TOKEN_KEY, '', { expires: new Date(), httpOnly: true });
}
