import { expensesServiceTrpc } from "../../connectors/expenseServiceConnector";
import { areaLogger } from "@web/src/lib/logger";
import { TRPCError } from '@trpc/server';

const logger = areaLogger('categories-web-service');

type CategoryCreatePayload = Parameters<typeof expensesServiceTrpc.categories.create.mutate>[0];
type CategoryGetParams = Parameters<typeof expensesServiceTrpc.categories.get.query>[0];

const categoriesService = {
  create: async (data: CategoryCreatePayload) => {
    return await expensesServiceTrpc.categories.create.mutate(data).catch((e: TRPCError) => {
      logger.error('create:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  get: async (params: CategoryGetParams) => {
    return await expensesServiceTrpc.categories.get.query(params).catch((e: TRPCError) => {
      logger.error('get:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  all: async () => {
    return await expensesServiceTrpc.categories.all.query().catch((e: TRPCError) => {
      logger.error('all:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
};

export default categoriesService;
