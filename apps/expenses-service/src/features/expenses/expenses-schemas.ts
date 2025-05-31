import { z } from 'zod';

export const expensePartialSchema = z.object({
  userId: z.number(),
  date: z.number(),
  cost: z.number(),
  productId: z.number().optional(),
  categoryId: z.number().optional(),
  typeId: z.number().optional(),
});

export const expenseSchema = expensePartialSchema.merge(
  z.object({ id: z.number() }),
);

export const expensePaginationSchema = z.object({
  page: z.number(),
  size: z.number(),
}).optional();

export const expenseFilterSchema = z.object({
  userId: z.number(),
  date: z
    .object({ from: z.number().optional(), to: z.number().optional() })
    .optional(),
  category: z.array(z.number()).optional(),
  type: z.array(z.number()).optional(),
});

export const expenseSortingSchema = z.object({
  date: z.enum(['asc', 'desc']),
}).optional()
