import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";
import { areaLogger } from "src/utils/logger";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const logger = areaLogger('category-service');

const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  async create({ name }: { name: string }) {
    const category = await prisma.category
      .create({ data: { name } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
    return category;
  }

  async get({ id }: { id: number }) {
    const category = await prisma.category
      .findFirst({ where: { id } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('get:', e);
        throw new Error(e.message);
      });
    return category;
  }

  async all() {
    const categories = await prisma.category
      .findMany()
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('all:', e);
        throw new Error(e.message);
      });
    return categories;
  }
}
