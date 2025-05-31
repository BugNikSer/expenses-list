import { PrismaClientKnownRequestError} from '@prisma/client/runtime/library';

import { PrismaClient, Prisma  } from '../../generated-prisma-client';
import { areaLogger } from '../../utils/logger';
import categoriesService from '../categories/categories-service';
import typesService from '../types/types-service';

const logger = areaLogger('expenses-service');

const prisma = new PrismaClient();

export type ExpenseFilter = {
  userId: number;
  date?: { from?: number; to?: number };
  category?: number[];
  type?: number[];
};
export type ExpensePagination = {
  page: number;
  size: number;
};
export type ExpenseSorting = Prisma.ExpenseOrderByWithRelationInput;

class ExpensesService {
  async create({ date, ...rest }: {
    userId: number;
    date: number;
    cost: number;
    productId?: number;
    categoryId?: number;
    typeId?: number;
  }) {
    if (!rest.productId || !rest.categoryId || !rest.typeId) {
      throw new Error('create: product, category or type required');
    }
    const expense = await prisma.expense
      .create({ data: { ...rest, date: new Date(date) } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('create:', e);
        throw new Error(e.message);
      });
    return expense;
  }

  async update({ id, date, ...rest }: {
    id: number;
    userId: number;
    date: number;
    cost: number;
    productId?: number;
    categoryId?: number;
    typeId?: number;
  }) {
    return await prisma.expense
      .update({ where: { id }, data: { ...rest, date: new Date(date) } })
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('update:', e);
        throw new Error(e.message);
      });
  }

  async list({
    filter: { userId, date, category, type },
    pagination,
    sorting,
  }: {
    filter: ExpenseFilter;
    pagination?: ExpensePagination;
    sorting?: ExpenseSorting;
  }) {
    const args = {
      where: {},
      include: { category: true, type: true },
    } as Prisma.ExpenseFindManyArgs;

    // filter
    if (userId) {
      if (!args.where) args.where = {};
      args.where.userId = userId;
    }
    if (date) {
      if (!args.where) args.where = {};
      args.where.date = {
        gte: date.from ? new Date(date.from) : undefined,
        lte: date.to ? new Date(date.to) : undefined,
      };
    }
    if (Array.isArray(category) && category.length) {
      if (!args.where) args.where = {};
      args.where.categoryId = { in: category };
    }
    if (Array.isArray(type) && type.length) {
      if (!args.where) args.where = {};
      args.where.typeId = { in: type };
    }

    // pagination
    if (pagination) {
      args.skip = pagination.page * pagination.size;
      args.take = pagination.size;
    }

    // sorting
    if (sorting) {
      args.orderBy = sorting;
    }

    return await prisma.expense
      .findMany(args)
      .catch((e: PrismaClientKnownRequestError) => {
        logger.error('list:', e);
        throw new Error(e.message);
      });
  }
}

const expensesService = new ExpensesService();

export default expensesService;
