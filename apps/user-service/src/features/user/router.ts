import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { router, procedure } from '../../trpc/trpc';
import userService from './service';

export const userRouter = router({
  create: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      const user = await userService.create(input).catch(e => {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: e.message,
        })
      });
      return user;
    }),
  find: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ input }) => {
      const user = await userService.find(input);
      if (!user) throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
      return user;
    })
})