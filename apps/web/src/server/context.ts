import { NextApiRequest, NextApiResponse } from 'next';
import { getTokens, setTokens } from '@web/src/lib/cookies';
import tokensService from './services/tokensService';

type TCtx = {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const createContext = async ({ req, res }: TCtx) => {
  const { token, refreshToken } = getTokens(req);
  if (!token || !refreshToken) return { userId: null, req, res };

  const data = await tokensService.parseTokens({ token, refreshToken });
  if (!data) return { userId: null, req, res };

  const { userId, tokens } = data;
  if (tokens) setTokens(tokens, res);
  return { userId, req, res };
}

export type Context = ReturnType<typeof createContext>;
