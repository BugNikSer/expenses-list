import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { parseToken, generateTokens, setTokenCookies, TOKEN_KEY, REFRESH_TOKEN_KEY } from '../utils/tokens';

export const createContext = (
  { req, res }: CreateExpressContextOptions
) => {
  console.log(req.headers)
  const token = req.cookies[TOKEN_KEY] as string | undefined;
  const refreshToken = req.cookies[REFRESH_TOKEN_KEY] as string | undefined;
  
  if (!token || !refreshToken) return { userId: null, res };

  let userId: number | null = null;

  userId = parseToken(token);
  if (userId !== null) return { userId, res };

  userId = parseToken(refreshToken);
  if (userId === null) return { userId: null, res };

  const newTokens = generateTokens(userId);
  if (!newTokens) return { userId: null, res };
  setTokenCookies(res, newTokens);

  return { userId, res };
};

export type Context = ReturnType<typeof createContext>;
