import { router } from "./trpc";
import { tokenRouter } from "../features/token/router";
import { userRouter } from "../features/user/router";

export const appRouter = router({
  tokens: tokenRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
