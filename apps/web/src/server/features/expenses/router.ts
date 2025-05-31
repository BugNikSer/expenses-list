import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, protectedProcedure } from '@web/src/server/trpc/trpc';
import expensesService from './service';

const expensesRouter = router({
  create: protectedProcedure
    .input(z.object({
      date: z.number(),
      cost: z.number(),
      productId: z.number().optional(),
      categoryId: z.number().optional(),
      typeId: z.number().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const userId = (await ctx).userId;
      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authorized' });
      return await expensesService.create({ ...input, userId });
    })
});

export default expensesRouter;
