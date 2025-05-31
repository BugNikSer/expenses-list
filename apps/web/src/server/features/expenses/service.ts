import { expensesServiceTrpc } from "../../connectors/expenseServiceConnector";
import { areaLogger } from "@web/src/lib/logger";
import { TRPCError } from '@trpc/server';

const logger = areaLogger('expenses-web-service');

type ExpensesCreateInput = Parameters<typeof expensesServiceTrpc.expenses.create.mutate>[0]
type ExpensesUpdateInput = Parameters<typeof expensesServiceTrpc.expenses.update.mutate>[0]
type ExpensesListParams = Parameters<typeof expensesServiceTrpc.expenses.list.query>[0]

const expensesService = {
  create: async (data: ExpensesCreateInput) => {
    return await expensesServiceTrpc.expenses.create.mutate(data).catch((e: TRPCError) => {
      logger.error('create:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  update: async (data: ExpensesUpdateInput) => {
    return await expensesServiceTrpc.expenses.update.mutate(data).catch((e: TRPCError) => {
      logger.error('update:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  list: async (params: ExpensesListParams) => {
    return await expensesServiceTrpc.expenses.list.query(params).catch((e: TRPCError) => {
      logger.error('list:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  }
};

export default expensesService;