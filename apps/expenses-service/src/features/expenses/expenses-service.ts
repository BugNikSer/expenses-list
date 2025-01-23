import { PrismaClientKnownRequestError} from '@prisma/client/runtime/library';

import { PrismaClient, Prisma  } from '../../generated-prisma-client';
import { areaLogger } from '../../utils/logger';
import categoriesService from '../categories/categories-service';
import typesService from '../types/types-service';

const logger = areaLogger('expenses-service');

const prisma = new PrismaClient();

export type ExpenseFilter = {
  userId: number;
  date?: { from?: Date; to?: Date };
  category?: number[];
  type?: number[];
};
export type ExpensePagination = {
  page: number;
  size: number;
};
export type ExpenseSorting = Prisma.ExpenseOrderByWithRelationInput;

class ExpensesService {
  private async handleCategory({
    categoryId,
    newCategory,
    expenseAction,
  }: {
    categoryId?: number;
    newCategory?: string;
    expenseAction: string;
  }) {
    if (newCategory) {
      const category = await categoriesService
        .create({ name: newCategory })
        .catch((e: Error) => {
          logger.error(`${expenseAction} expense - create category:`, e);
          throw e;
        });
      return category.id;
    } else if (categoryId) {
      return categoryId;
    } else {
      throw new Error('Missing category');
    }
  }

  private async handleType({
    typeId,
    newType,
    expenseAction,
  }: {
    typeId?: number;
    newType?: string;
    expenseAction: string;
  }) {
    if (newType) {
      const type = await typesService
        .create({ name: newType })
        .catch((e: Error) => {
          logger.error(`${expenseAction} expense - create type:`, e);
          throw e;
        });
      return type.id;
    } else if (typeId) {
      return typeId;
    } else {
      throw new Error('Missing type');
    }
  }

  async create({
    userId,
    product,
    date,
    categoryId,
    newCategory,
    typeId,
    newType,
  }: {
    userId: number;
    product: string;
    date: Date;
    categoryId?: number;
    newCategory?: string;
    typeId?: number;
    newType?: string;
  }) {
    const data = {
      userId,
      product,
      date,
    } as Parameters<typeof prisma.expense.create>[0]['data'];

    data.categoryId = await this.handleCategory({
      categoryId,
      newCategory,
      expenseAction: 'create',
    });
    data.typeId = await this.handleType({
      typeId,
      newType,
      expenseAction: 'create',
    });

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
    userId,
    product,
    date,
    categoryId,
    newCategory,
    typeId,
    newType,
  }: {
    id: number;
    userId: number;
    product: string;
    date: Date;
    categoryId?: number;
    newCategory?: string;
    typeId?: number;
    newType?: string;
  }) {
    const data = {
      userId,
      product,
      date,
    } as Parameters<typeof prisma.expense.update>[0]['data'];

    data.categoryId = await this.handleCategory({
      categoryId,
      newCategory,
      expenseAction: 'update',
    });
    data.typeId = await this.handleType({
      typeId,
      newType,
      expenseAction: 'update',
    });

    return await prisma.expense
      .update({ where: { id }, data })
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
      args.where.date = { gte: date.from, lte: date.to };
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
