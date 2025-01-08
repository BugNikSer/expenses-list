import { router } from "./trpc";
import { authRouter } from "./authRouter";
import { expensesRouter } from './expensesRouter';

export const appRouter = router({
  auth: authRouter,
  expenses: expensesRouter,
});

export type TAppRouter = typeof appRouter;
