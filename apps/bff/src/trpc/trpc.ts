import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './context';

export const trpc = initTRPC.context<Context>().create();

export const router = trpc.router;

export const publicProcedure = trpc.procedure;

export const protectedProcedure = trpc.procedure.use(async (opts) => {
  const { ctx } = opts;
  if (ctx.userId === null) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return opts.next();
});
