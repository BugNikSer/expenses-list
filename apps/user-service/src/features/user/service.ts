import { PrismaClient } from '@prisma/client/users';
import bcrypt from 'bcrypt';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('user-service');

const prisma = new PrismaClient();

type TUser = Exclude<Awaited<ReturnType<typeof prisma.user.findFirst>>, null>;
const cleanUser = (user: TUser) => {
  const { hash, ...rest } = user;
  return rest;
}

const userService = {
  create: async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    const hash = await bcrypt.hash(password, 11).catch(e => {
      logger.error('create user - hash password', e);
      throw e;
    })
    const user = await prisma.user.create({ data: { email, hash } }).catch(e => {
      logger.error('create user - db', e);
      throw e;
    });
    return cleanUser(user);
  },
  find: async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    const user = await prisma.user.findFirst({
      where: { email },
    }).catch(e => {
      logger.error('find user - query:', e);
      throw e;
    })
    if (!user) return null;

    const pwdMatches = await bcrypt.compare(password, user?.hash).catch(e => {
      logger.error('find user - compare password:', e);
      throw e;
    })
    if (!pwdMatches) return null;
    return cleanUser(user);
  },
  get: async ({
    userId,
  } : {
    userId: number;
  }) => {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    }).catch(e => {
      logger.error('get user', e);
      throw e;
    })
    if (!user) return null;
    return cleanUser(user);
  }
};

export default userService;
