import { router } from "./init";
import categoriesRouter from "../features/categories/categories-router";
import expensesRouter from "../features/expenses/expenses-router";
import productsRouter from "../features/products/products-router";
import typesRouter from "../features/types/types-router";

export const appRouter = router({
  categories: categoriesRouter,
  expenses: expensesRouter,
  products: productsRouter,
  types: typesRouter,
});

export type ExpensesServiceRouter = typeof appRouter;
