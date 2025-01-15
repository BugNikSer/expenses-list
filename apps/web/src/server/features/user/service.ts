import { userServiceTrpc } from '@web/src/server/connectors/userServiceConnector';
import { areaLogger } from "@web/src/lib/logger";
import { TRPCError } from '@trpc/server';

const logger = areaLogger('user-service');

const userService = {
  create: async (data: {
    email: string;
    password: string;
  }) => {
    const user = await userServiceTrpc.user.create.mutate(data).catch((e: TRPCError) => {
      logger.error('create', e);
      throw new Error(`create: ${e.message}`);
    });
    return user;
  },
  find: async (data: {
    email: string;
    password: string;
  }) => {
    const user = await userServiceTrpc.user.find.query(data).catch((e: TRPCError) => {
      logger.error('find', e);
      throw new Error(`find: ${e.message}`);
    });
    return user;
  },
  get: async (data: { userId: number }) => {
    const user = await userServiceTrpc.user.get.query(data).catch((e: TRPCError) => {
      logger.error('get', e);
      throw new Error(`get: ${e.message}`);
    })
    return user;
  },
};

export default userService;
