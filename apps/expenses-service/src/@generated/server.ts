import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  category: t.router({
    create: publicProcedure.input(z.object({ name: z.string() })).output(z.object({
      id: z.number(),
      name: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    get: publicProcedure.input(z.object({ id: z.number() })).output(z.object({
      id: z.number(),
      name: z.string(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    all: publicProcedure.output(z.array(z.object({
      id: z.number(),
      name: z.string(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  type: t.router({
    create: publicProcedure.input(z.object({ name: z.string() })).output(z.object({
      id: z.number(),
      name: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    get: publicProcedure.input(z.object({ id: z.number() })).output(z.object({
      id: z.number(),
      name: z.string(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    all: publicProcedure.output(z.array(z.object({
      id: z.number(),
      name: z.string(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

