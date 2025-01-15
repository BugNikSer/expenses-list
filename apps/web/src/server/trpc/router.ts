import { z } from "zod";
import { router, publicProcedure } from './trpc';
import authRouter from "../features/auth/router";
import userRouter from "../features/user/router";

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
});

export type AppRouter = typeof appRouter;
