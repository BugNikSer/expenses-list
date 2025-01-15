import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, publicProcedure } from '@web/src/server/trpc/trpc';
import { setTokens, dropTokens } from '@web/src/lib/cookies';
import { SignUpFormSchema, SignInFormSchema } from '@web/src/lib/definitions';
import authService from '@web/src/server/features/auth/service';

const authRouter = router({
  signUp: publicProcedure
    .input(SignUpFormSchema)
    .mutation(async ({ input, ctx }) => {
        const { data, error } = SignUpFormSchema.safeParse(input);

        if (error) throw new TRPCError({
          code: 'UNPROCESSABLE_CONTENT',
          message: JSON.stringify(error.flatten().fieldErrors),
        });
        if (!data) throw new TRPCError({
          code: 'PARSE_ERROR',
          message: 'No input parse result',
        })

        const { tokens } = await authService.signUp(data).catch(e => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          })
        });

        const context = await ctx;
        await setTokens(tokens, context.res);
        return true;
    }),
  signIn: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { data, error } = SignInFormSchema.safeParse(input);

      if (error) throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: JSON.stringify(error.flatten().fieldErrors),
      });
      if (!data) throw new TRPCError({
        code: 'PARSE_ERROR',
        message: 'No input parse result',
      })

      const { tokens } = await authService.signIn(data).catch(e => {
        if (String(e.message).endsWith('404')) throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: e.message,
        });
      })
    
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
  userId: publicProcedure
    .query(async ({ ctx }) => {
      const context = await ctx;
      return context.userId;
    }),
});

export default authRouter;
