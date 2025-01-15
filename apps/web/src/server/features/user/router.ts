import { TRPCError } from '@trpc/server';

import { router, protectedProcedure } from '@web/src/server/trpc/trpc';
import userService from './service';

const userRouter = router({
  get: protectedProcedure
    .query(async ({ ctx }) => {
      const { userId } = await ctx;
      if (!userId) throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Not authorized',
      });

      return await userService.get({ userId });
    }),
});

export default userRouter;
