import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('user-service');

const prisma = new PrismaClient();

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
      throw new Error(`create user, ${e.message}`);
    })
    const user = await prisma.user.create({ data: { email, hash } }).catch(e => {
      logger.error('create user - db', e);
      throw new Error(`create user, ${e.message}`);
    });
    return { ...user, id: Number(user.id) };
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
      throw new Error(`find user: ${e.message}`);
    })
    if (!user) return null;

    const pwdMatches = await bcrypt.compare(password, user?.hash).catch(e => {
      logger.error('find user - compare password:', e);
      throw new Error(`find user: ${e.message}`);
    })
    if (pwdMatches) return { ...user, id: Number(user.id) };
    return null;
  },
};

export default userService;
