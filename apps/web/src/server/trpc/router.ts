import { z } from "zod";
import { router, publicProcedure } from './trpc';
import authRouter from "../features/auth/router";
import userRouter from "../features/users/router";
import categoriesRouter from "../features/categories/router";
import productsRouter from "../features/products/router";
import typesRouter from "../features/types/router";
import expensesRouter from "../features/expenses/router";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async (opts) => {
      return {
        greeting: `hello ${opts.input.text} ${(await opts.ctx).userId}`,
      };
    }),
  auth: authRouter,
  user: userRouter,
  categories: categoriesRouter,
  products: productsRouter,
  types: typesRouter,
  expenses: expensesRouter,
});

export type AppRouter = typeof appRouter;
