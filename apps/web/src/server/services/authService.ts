import { userServiceTrpc } from '@web/src/server/connectors/user-service';
import { addMockUser, findMockUser } from "@web/src/server/mock/users";
import { areaLogger } from "@web/src/lib/logger";

const logger = areaLogger('auth-service');

const authService = {
  signUp: async (data: {
    login: string,
    password: string
  }) => {
    const userId = await addMockUser(data).catch(e => {
      logger.warn('create user', e);
      throw new Error(`create user: ${e.message}`);
    });
    const tokens = await userServiceTrpc.tokens.generate.query({ userId }).catch(e => {
      logger.warn('generate tokens', e);
      throw new Error(`generate tokens: ${e.message}`);
    });
    return { userId, tokens };
  },
  signIn: async (data: {
    login: string,
    password: string
  }) => {
    const user = await findMockUser(data).then(user => {
      if (!user) throw new Error('404');
      return user;
    }).catch(e => {
      logger.warn('find user', e);
      throw new Error(`find user: ${e.message}`);
    });
    const tokens = await userServiceTrpc.tokens.generate.query({ userId: user.id }).catch(e => {
      logger.warn('generate tokens', e);
      throw new Error(`generate tokens: ${e.message}`);
    });
    return { userId: user.id, tokens };
  }
};

export default authService;
