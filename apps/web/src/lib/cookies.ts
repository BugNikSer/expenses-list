import 'server-only';

import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';

export const TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';
// const HOUR = 60_000;
const DAY = 86_400_000;
const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
  path: '/',
} as const;

export const getTokens = (
  req: NextApiRequest
) => {
  if (!req.headers.cookie) {
    return { token: null, refreshToken: null };
  }

  const cookies = parse(req.headers.cookie);
  const token = cookies[TOKEN_KEY];
  const refreshToken = cookies[REFRESH_TOKEN_KEY];
  
  return { token, refreshToken };
}

export const setTokens = async (
  { token, refreshToken }: { token: string, refreshToken: string },
  res: NextApiResponse,
) => {
  const options = { maxAge: DAY / 1_000, ...cookieOptions };

  res.setHeader('Set-Cookie', [
    serialize(TOKEN_KEY, token, options),
    serialize(REFRESH_TOKEN_KEY, refreshToken, options),
  ])
};

export const dropTokens = async (
  res: NextApiResponse,
) => {
  const options = { maxAge: 0, ...cookieOptions };
  res.setHeader('Set-Cookie', [
    serialize(TOKEN_KEY, '', options),
    serialize(REFRESH_TOKEN_KEY, '', options),
  ]);
};
