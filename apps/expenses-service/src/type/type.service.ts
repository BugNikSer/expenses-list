import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";
import { areaLogger } from "src/utils/logger";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const logger = areaLogger('type-service');

const prisma = new PrismaClient();

@Injectable()
export class TypeService {
  async create({ name }: { name: string }) {
    const type = await prisma.type
      .create({ data: { name } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
    return type;
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
