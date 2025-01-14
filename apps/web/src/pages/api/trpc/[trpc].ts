import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@web/src/server/trpc/router';
import { createContext } from '@web/src/server/trpc/context';

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError(opts) {
    const { error, input, path, type } = opts;
    if (error.code === 'INTERNAL_SERVER_ERROR') console.warn('Error on', type, path, input, error);
  },
});