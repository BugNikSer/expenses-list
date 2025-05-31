import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, protectedProcedure } from '@web/src/server/trpc/trpc';
import typesService from './service';

const typesRouter = router({
  all: protectedProcedure
    .query(async () => {
      return await typesService.all();
    }),
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = (await ctx).userId;
      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authorized' })
      return await typesService.create({ ...input, userId });
    }),
});

export default typesRouter;