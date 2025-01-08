import { router } from "./trpc";
import { authRouter } from "./authRouter";

export const appRouter = router({
  auth: authRouter,
});

export type TAppRouter = typeof appRouter;
