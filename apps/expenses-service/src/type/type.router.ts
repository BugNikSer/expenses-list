import { Router, Query, Mutation, Input } from 'nestjs-trpc';
import { Inject } from '@nestjs/common';
import { z } from 'zod';
import { TypeService } from './type.service';
import { areaLogger } from 'src/utils/logger';
import { TRPCError } from '@trpc/server';

const logger = areaLogger('type-router');

const typeSchema = z.object({
  id: z.number(),
  name: z.string(),
});

@Router({ alias: 'type' })
export class TypeRouter {
  constructor(
    @Inject(TypeService) private readonly typeService: TypeService
  ) {}

  @Mutation({
    input: z.object({ name: z.string() }),
    output: typeSchema,
  })
  async create(@Input('name') name: string) {
    return await this.typeService.create({ name }).catch((e: Error) => {
      logger.error('create:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });
  }

  @Query({
    input: z.object({ id: z.number() }),
    output: typeSchema,
  })
  async get(@Input('id') id: number) {
    const type = await this.typeService.get({ id }).catch((e: Error) => {
      logger.error('get:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });

    if (!type) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Type not found' });
    };

    return type;
  }

  @Query({
    output: z.array(typeSchema)
  })
  async all() {
    return await this.typeService.all().catch((e: Error) => {
      logger.error('all:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });
  }
}
