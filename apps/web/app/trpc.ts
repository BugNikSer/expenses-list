import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { TAppRouter } from '@bff/trpc';

export const trpc = createTRPCProxyClient<TAppRouter>({
  links: [
    httpBatchLink({ url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc` })
  ],
})
