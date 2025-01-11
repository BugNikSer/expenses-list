import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, publicProcedure } from '@web/src/server/trpc';
import { setTokens, dropTokens } from '@web/src/lib/cookies';
import { SignUpFormSchema, SignInFormSchema } from '@web/src/lib/definitions';
import { addMockUser, findMockUser } from "@web/src/server/mock/users";
import { userServiceTrpc } from '@web/src/server/connectors/user-service';

export const authRouter = router({
  signUp: publicProcedure
    .input(SignUpFormSchema)
    .mutation(async ({ input, ctx }) => {
        const validated = SignUpFormSchema.safeParse({
          login: input.login,
          password: input.password,
        });
      
        if (!validated.success) {
          throw new TRPCError({
            code: 'UNPROCESSABLE_CONTENT',
            message: JSON.stringify(validated.error.flatten().fieldErrors),
          });
        }
      
        let userId: number | null = null;
        try {
          userId = addMockUser(validated.data);
        } catch (e) {
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: (e as Error).message });
        }
      
        const tokens = await userServiceTrpc.tokens.generate.query({ userId });
        if (!tokens) {
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to generate token' });
        }

        const context = await ctx;
        await setTokens(tokens, context.res);
        return true;
    }),
  signIn: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const validated = SignInFormSchema.safeParse({
        login: input.login,
        password: input.password,
      });
    
      if (!validated.success) {
        throw new TRPCError({
          code: 'UNPROCESSABLE_CONTENT',
          message: JSON.stringify(validated.error.flatten().fieldErrors),
        });
      }
    
      const user = findMockUser(validated.data);
      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
      }
    
      const tokens = await userServiceTrpc.tokens.generate.query({ userId: user.id });
      if (!tokens) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to generate token' });
      }
    
      const context = await ctx;
      await setTokens(tokens, context.res);
      return true;
    }),
  signOut: publicProcedure
    .mutation(async ({ ctx }) => {
      const context = await ctx;
      dropTokens(context.res);
      return true;
    }),
  test: publicProcedure
    .query(async ({ ctx }) => {
      const context = await ctx;
      return context.userId;
    }),
})