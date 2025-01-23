import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from "../../trpc/init";
import expensesService from './expenses-service';
import { areaLogger } from '../../utils/logger';
import {
  expensePartialSchema,
  expenseSchema,
  expensePaginationSchema,
  expenseFilterSchema,
  expenseSortingSchema,
} from './expenses-schemas';

const logger = areaLogger('expenses-router');

const expensesRouter = router({
  create: procedure
    .input(expensePartialSchema)
    .mutation(async ({ input }) => {
      return await expensesService
        .create(input)
        .catch((e: Error) => {
          logger.error('create:', e);
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
        });
    }),

  update: procedure
    .input(expenseSchema)
    .mutation(async ({ input }) => {
      return await expensesService
        .update(input)
        .catch((e: Error) => {
          logger.error('update:', e);
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
        });
    }),
  
  list: procedure
    .input(z.object({
      pagination: expensePaginationSchema,
      filter: expenseFilterSchema,
      sorting: expenseSortingSchema,
    }))
    .query(async ({ input }) => {
      return await expensesService
        .list(input)
        .catch((e: Error) => {
          logger.error('list:', e);
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message, });
        });
    }),
});

export default expensesRouter;