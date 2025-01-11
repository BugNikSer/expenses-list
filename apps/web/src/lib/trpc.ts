import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { ssrPrepass } from '@trpc/next/ssrPrepass';
import type { AppRouter } from '@web/src/server/routers';
import config from './config';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  return config.bffUrl;
}

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  ssrPrepass,
  config(opts) {
    const { ctx } = opts;

    if (typeof window !== 'undefined') return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
            });
          },
        })
      ],
    };

    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            return {
              cookie: ctx.req.headers.cookie,
            };
          },
        }),
      ],
    };
  },
});