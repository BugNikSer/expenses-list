import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@users-service/src/trpc/appRouter';
import config from '@web/src/lib/config';

export const userServiceTrpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: config.userServiceUrl,
    })
  ]
});
