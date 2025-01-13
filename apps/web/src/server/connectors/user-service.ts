import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@user-service/src/trpc/appRouter';

export const userServiceTrpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4001',
    })
  ]
});
