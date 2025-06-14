import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaClient } from '../../generated-prisma-client';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('categories-service');

const prisma = new PrismaClient();

class CategoriesService {
  async create(data: { name: string, userId: number }) {
    return await prisma.category
      .create({ data })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
  }

  async update({ name, id }: { name: string, id: number }) {
    return await prisma.category
      .update({ where: { id }, data: { name } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('update:', e);
        throw new Error(e.message);
      });
  }

  async get({ id }: { id: number }) {
    return await prisma.category
      .findFirst({ where: { id } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('get:', e);
        throw new Error(e.message);
      });
  }
  
  async all() {
    return await prisma.category
      .findMany()
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('all:', e);
        throw new Error(e.message);
      });
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
