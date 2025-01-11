import { router } from "./trpc";
import { tokenRouter } from "./tokenRouter";

export const appRouter = router({
  tokens: tokenRouter,
});

export type AppRouter = typeof appRouter;
