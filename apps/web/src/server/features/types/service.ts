import { expensesServiceTrpc } from "../../connectors/expenseServiceConnector";
import { areaLogger } from "@web/src/lib/logger";
import { TRPCError } from '@trpc/server';

const logger = areaLogger('types-web-service');

type TypeCreatePayload = Parameters<typeof expensesServiceTrpc.types.create.mutate>[0];
type TypeGetParams = Parameters<typeof expensesServiceTrpc.types.get.query>[0];

const typesService = {
  create: async (data: TypeCreatePayload) => {
    return await expensesServiceTrpc.types.create.mutate(data).catch((e: TRPCError) => {
      logger.error('create:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  get: async (params: TypeGetParams) => {
    return await expensesServiceTrpc.types.get.query(params).catch((e: TRPCError) => {
      logger.error('get:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
  all: async () => {
    return await expensesServiceTrpc.types.all.query().catch((e: TRPCError) => {
      logger.error('all:', e);
      throw new Error(`${e.code}: ${e.message}`);
    });
  },
};

export default typesService;
