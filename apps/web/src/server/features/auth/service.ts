import { userServiceTrpc } from '@web/src/server/connectors/userServiceConnector';
import { areaLogger } from '@web/src/lib/logger';
import userService from '@web/src/server/features/user/service';
import { TRPCError } from '@trpc/server';

const logger = areaLogger('auth-service');

const authService = {
  signUp: async (data: {
    email: string,
    password: string
  }) => {
    const user = await userService
      .create(data)
      .catch((e: Error) => {
        logger.warn('create user', e);
        throw new Error(`create user: ${e.message}`);
      });
    const userId = user.id;
    const tokens = await userServiceTrpc.tokens.generate
      .query({ userId })
      .catch((e: TRPCError) => {
        logger.warn('generate tokens', e);
        throw new Error(`generate tokens: ${e.message}`);
      });
    return { userId, tokens };
  },
  signIn: async (data: {
    email: string,
    password: string
  }) => {
    const user = await userService
      .find(data)
      .then(user => {
        if (!user) throw new Error('404');
        return user;
      }).catch((e: Error) => {
        logger.warn('find user', e);
        throw new Error(`find user: ${e.message}`);
      });
    const tokens = await userServiceTrpc.tokens.generate
      .query({ userId: user.id })
      .catch((e : TRPCError) => {
        logger.warn('generate tokens', e);
        throw new Error(`generate tokens: ${e.message}`);
      });
    return { userId: user.id, tokens };
  }
};

export default authService;
