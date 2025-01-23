import { createTRPCClient, httpBatchLink } from "@trpc/client";

import { ExpensesServiceRouter } from '@expenses-service/src/trpc/router';
import config from '@web/src/lib/config';

export const expenseServiceTrpc = createTRPCClient<ExpensesServiceRouter>({
  links: [
    httpBatchLink({
      url: config.expenseServiceUrl,
    })
  ]
});
