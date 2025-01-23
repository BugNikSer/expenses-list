import { z } from 'zod';

export const expensePartialSchema = z.object({
  userId: z.number(),
  product: z.string(),
  date: z.date(),
  categoryId: z.number().optional(),
  newCategory: z.string().optional(),
  typeId: z.number().optional(),
  newType: z.string().optional(),
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
    .object({ from: z.date().optional(), to: z.date().optional() })
    .optional(),
  category: z.array(z.number()).optional(),
  type: z.array(z.number()).optional(),
});

export const expenseSortingSchema = z.object({
  date: z.enum(['asc', 'desc']),
}).optional()
