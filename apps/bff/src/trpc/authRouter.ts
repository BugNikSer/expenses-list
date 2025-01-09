
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "./trpc";
import { generateTokens, setTokenCookies, dropTokenCookies } from "../utils/tokens";

export const authRouter = router({
  login: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      // TODO: DB + ORM
      const { login, password } = input;
      const userId = login.length + password.length;

      const tokens = generateTokens(userId);
      if (!tokens) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' });
      setTokenCookies(ctx.res, tokens);

      return true;
    }),
  logout: publicProcedure
    .query(({ ctx }) => {
      dropTokenCookies(ctx.res);
      return true;
    }),
  test: publicProcedure
    .query(({ ctx }) => {
      return ctx.userId;
    }),
})
