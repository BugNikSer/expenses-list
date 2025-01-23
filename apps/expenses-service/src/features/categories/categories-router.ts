import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from "../../trpc/init";
import categoriesService from "./categories-service";
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('categories-router');

const categoriesRouter = router({
  create: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return await categoriesService
      .create(input)
      .catch((e: Error) => {
        logger.error('create:', e);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: e.message,
        });
      });
    }),

  get: procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const category = await categoriesService
        .get(input)
        .catch((e: Error) => {
          logger.error('get:', e);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          });
        });

      if (!category) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Category not found' });
      }
  
      return category;
    }),

  all: procedure
    .query(async () => {
      return await categoriesService
        .all()
        .catch((e: Error) => {
          logger.error('all:', e);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          });
        });
    })
});

export default categoriesRouter;
