import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@web/src/server/routers';
import { createContext } from '@web/src/server/context';

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError(opts) {
    const { error, input, path, type } = opts;
    if (error.code === 'INTERNAL_SERVER_ERROR') console.warn('Error on', type, path, input, error);
  },
  responseMeta(opts) {
    const { info, paths, errors, type } = opts;
    console.log('=======================')
    console.log('=======================')
    console.log('=======================')
    console.log({ info, errors, type })
    console.log('--------')
    console.log(info?.calls)
    console.log(paths)

    const allAuth = info?.calls.every(({ path }) => path.startsWith('auth'));
    // checking that no procedures errored
    const allOk = errors.length === 0;
    // checking we're doing a query request
    const isQuery = type === 'query';

    if (allAuth && allOk && isQuery) {
      // cache request for 1 day + revalidate once every second
      const HOUR = 60 * 60;
      return {
        headers: new Headers([
          [
            'cache-control',
            `s-maxage=1, stale-while-revalidate=${HOUR}`,
          ],
        ]),
      };
    }
    return {};
  },
});