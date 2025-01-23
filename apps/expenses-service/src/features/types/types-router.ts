import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from "../../trpc/init";
import typesService from './types-service';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('types-router');

const typesRouter = router({
  create: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return await typesService
        .create(input)
        .catch((e: Error) => {
          logger.error('create:', e);
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
        });
    }),
  
    get: procedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const type = await typesService
          .get(input)
          .catch((e: Error) => {
            logger.error('get:', e);
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
          });
        
          if (!type) {
            throw new TRPCError({ code: 'NOT_FOUND', message: 'Type not found' });
          };
      
          return type;
      }),

    all: procedure
      .query(async () => {
        return await typesService
          .all()
          .catch((e: Error) => {
            logger.error('all:', e);
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
          });
      }),
});

export default typesRouter;
