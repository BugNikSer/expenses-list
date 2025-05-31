import { PrismaClientKnownRequestError} from '@prisma/client/runtime/library';

import { PrismaClient  } from '../../generated-prisma-client';
import { areaLogger } from '../../utils/logger';

const logger = areaLogger('types-service');

const prisma = new PrismaClient();

class TypesService {
  async create(data: { name: string, userId: number }) {
    const type = await prisma.type
      .create({ data })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
    return type;
  }

  async update({ name, id }: { name: string, id: number }) {
    return await prisma.type
      .update({ where: { id }, data: { name } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('update:', e);
        throw new Error(e.message);
      });
  }

  async get({ id }: { id: number }) {
    const type = await prisma.type
      .findFirst({ where: { id } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('get:', e);
        throw new Error(e.message);
      });
    return type;
  }

  async all() {
    const types = await prisma.type
      .findMany()
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('all:', e);
        throw new Error(e.message);
      });
    return types;
  }
}

const typesService = new TypesService();

export default typesService;
