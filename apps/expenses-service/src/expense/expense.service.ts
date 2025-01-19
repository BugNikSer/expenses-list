import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";
import { areaLogger } from "src/utils/logger";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const logger = areaLogger('expense-service');

const prisma = new PrismaClient();

@Injectable()
export class ExpenseService {
  async create (data: {
  userId: number
  product: string
  date: Date
  categoryId: number
  typeId: number
  }) {
    const expense = await prisma.expense
      .create({ data })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
    return expense;
  }

  async update({
    id,
    ...data
  }: {
    id: number
    userId: number
    product: string
    date: Date
    categoryId: number
    typeId: number
  }) {
    const expense = await prisma.expense
      .update({ where: { id }, data })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('update:', e);
        throw new Error(e.message);
      });
  }

  async list({
    userId,
    date,
    category,
    type,
    pagination
  }: {
    userId: number
    date?: { from?: Date, to?: Date }
    category?: number[]
    type?: number[]
    pagination?: { page: number, size: number }
  }) {
    const query = prisma.expense
      .findMany() // TODO
  }
}