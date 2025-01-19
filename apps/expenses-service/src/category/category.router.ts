import { Router, Query, Mutation, Input } from 'nestjs-trpc';
import { Inject } from '@nestjs/common';
import { z } from 'zod';
import { CategoryService } from './category.service';
import { areaLogger } from 'src/utils/logger';
import { TRPCError } from '@trpc/server';

const logger = areaLogger('category-router');

const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

@Router({ alias: 'category' })
export class CategoryRouter {
  constructor(
    @Inject(CategoryService) private readonly categoryService: CategoryService
  ) {}

  @Mutation({
    input: z.object({ name: z.string() }),
    output: categorySchema,
  })
  async create(@Input('name') name: string) {
    return await this.categoryService.create({ name }).catch((e: Error) => {
      logger.error('create:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });
  }

  @Query({
    input: z.object({ id: z.number() }),
    output: categorySchema,
  })
  async get(@Input('id') id: number) {
    const category = await this.categoryService.get({ id }).catch((e: Error) => {
      logger.error('get:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });

    if (!category) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Category not found' });
    };

    return category;
  }

  @Query({
    output: z.array(categorySchema)
  })
  async all() {
    return await this.categoryService.all().catch((e: Error) => {
      logger.error('all:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: e.message });
    });
  }
}
