import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { router, procedure } from '../../trpc/trpc';
import userService from './service';

export const userRouter = router({
  create: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      const user = await userService
        .create(input)
        .catch((e: PrismaClientKnownRequestError | Error) => {
          if ('code' in e && e.code === 'P2002') throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'User exists',
          });
          if ('code' in e && e.code.startsWith('P2')) throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Something wrong with data',
          });
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something wrong with server',
          });
        });
      return user;
    }),
  find: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ input }) => {
      const user = await userService
        .find(input)
        .catch((e: PrismaClientKnownRequestError | Error) => {
          if ('code' in e && e.code.startsWith('P2')) throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Something wrong with data',
          });
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something wrong with server',
          });
        });
      if (!user) throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
      return user;
    }),
  get: procedure
    .input(z.object({ userId: z.number()}))
    .query(async ({ input: { userId } }) => {
      const user = await userService
        .get({ userId })
        .catch((e: PrismaClientKnownRequestError | Error) => {
          if ('code' in e && e.code.startsWith('P2')) throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Something wrong with data',
          });
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something wrong with server',
          });
        });
      if (!user) throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
      return user;
    }),
})