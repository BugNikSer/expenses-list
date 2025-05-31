import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from "../../trpc/init";
import productsService from "./products-service";
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('products-router');

const productsRouter = router({
  create: procedure
    .input(z.object({ name: z.string(), userId: z.number() }))
    .mutation(async ({ input }) => {
      return await productsService
        .create(input)
        .catch((e: Error) => {
          logger.error('create:', e);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          });
        });
    }),

  update: procedure
    .input(z.object({ name: z.string(), id: z.number() }))
    .mutation(async ({ input }) => {
      return await productsService
        .update(input)
        .catch((e: Error) => {
          logger.error('update:', e);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          });
        });
    }),

  get: procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const product = await productsService
        .get(input)
        .catch((e: Error) => {
          logger.error('get:', e);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: e.message,
          });
        });
      if (!product) throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Product not found',
      });
      return product;
    }),

  all: procedure
    .query(async () => {
      return await productsService
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

export default productsRouter;
