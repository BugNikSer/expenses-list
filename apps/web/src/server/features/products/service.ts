import { expensesServiceTrpc } from "../../connectors/expenseServiceConnector";
import { areaLogger } from "@web/src/lib/logger";
import { TRPCError } from '@trpc/server';

const logger = areaLogger('products-web-service');

type ProductCreatePayload = Parameters<typeof expensesServiceTrpc.products.create.mutate>[0];
type ProductGetParams = Parameters<typeof expensesServiceTrpc.products.get.query>[0];

const productsService = {
  create: async (data: ProductCreatePayload) => {
    return await expensesServiceTrpc.products.create.mutate(data).catch((e: TRPCError) => {
      logger.error('create:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  get: async (params: ProductGetParams) => {
    return await expensesServiceTrpc.products.get.query(params).catch((e: TRPCError) => {
      logger.error('get:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  all: async () => {
    return await expensesServiceTrpc.products.all.query().catch((e: TRPCError) => {
      logger.error('all:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
};

export default productsService;
