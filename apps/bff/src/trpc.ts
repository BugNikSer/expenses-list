import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const trpc = initTRPC.create();

export const appRouter = trpc.router({
  hello: trpc.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      const { name } = input;
      return `Hello ${name || 'unknown'}`
    })
});

export type TAppRouter = typeof appRouter;
