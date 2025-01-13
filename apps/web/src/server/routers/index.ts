import { z } from "zod";
import { router, publicProcedure } from '../trpc';
import { authRouter } from "./authRouter";

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
});

export type AppRouter = typeof appRouter;
