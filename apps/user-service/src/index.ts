import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

import { appRouter } from './appRouter';
import config from './config';

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
  onError({ error, input, path, type }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.log('[user-service] Error', type, path, 'with', input, error);
    }
  }
});

server.listen(config.port, () => { console.log('[user-service] Listening', config.port) });
