import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { router, procedure } from './trpc';
import config from '../utils/config';
import { generateTokens, parseTokens } from '../utils/methods';

export const tokenRouter = router({
  generate: procedure
    .input(z.object({
      userId: z.number(),
    }))
    .query(({ input: { userId } }) => {
      if (!config.authSecreteKey) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Bad configuration',
        });
      }
      return generateTokens(userId, config.authSecreteKey);
    }),

  parseBoth: procedure
    .input(z.object({
      token: z.string(),
      refreshToken: z.string(),
    }))
    .query(({ input: { token, refreshToken } }) => {
      if (!config.authSecreteKey) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Bad configuration',
        });
      }

      const parsed = parseTokens(token, refreshToken, config.authSecreteKey);
      if (!parsed) {
        throw new TRPCError({
          code: 'UNPROCESSABLE_CONTENT',
          message: 'Unable to parse',
        });
      }

      const { payload, expired } = parsed;
      if (expired) {
        const tokens = generateTokens(payload.userId, config.authSecreteKey);
        return { ...payload, tokens };
      } else {
        return { ...payload, tokens: null };
      }
    })
})