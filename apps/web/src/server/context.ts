import { NextApiRequest, NextApiResponse } from 'next';
import {
  getTokens,
  setTokens,
  // TOKEN_KEY,
  // REFRESH_TOKEN_KEY
} from '@web/src/lib/cookies';
import { userServiceTrpc } from '@web/src/server/connectors/user-service';


type TCtx = {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const createContext = async ({ req, res }: TCtx) => {
  const { token, refreshToken } = getTokens(req);
  
  if (!token || !refreshToken) return { userId: null, req, res };

  const parsed = await userServiceTrpc.tokens.parseBoth.query({ token, refreshToken });
  if (!parsed) return { userId: null, req, res };

  const userId = parsed;
  if ('tokens' in parsed) setTokens(parsed.tokens, res);

  return { userId, req, res };
}

export type Context = ReturnType<typeof createContext>;
