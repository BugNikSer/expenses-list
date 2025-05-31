import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, protectedProcedure } from '@web/src/server/trpc/trpc';
import categoriesService from './service';

const categoriesRouter = router({
  all: protectedProcedure
    .query(async () => {
      return await categoriesService.all();
    }),
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = (await ctx).userId;
      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authorized' });
      return await categoriesService.create({ ...input, userId });
    }),
});

export default categoriesRouter;
