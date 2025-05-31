import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaClient } from '../../generated-prisma-client';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('products-service');

const prisma = new PrismaClient();

class ProductsService {
  async create(data: { name: string, userId: number }) {
    return await prisma.product
      .create({ data })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
  }

  async update({ name, id }: { name: string, id: number }) {
    return await prisma.product
      .update({ where: { id }, data: { name } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('update:', e);
        throw new Error(e.message);
      });
  }

  async get({ id }: { id: number }) {
    return await prisma.product
      .findFirst({ where: { id } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('get:', e);
        throw new Error(e.message);
      });
  }
  
  async all() {
    return await prisma.product
      .findMany()
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('all:', e);
        throw new Error(e.message);
      });
  }
};

const productsService = new ProductsService();

export default productsService;
