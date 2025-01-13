import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

import { appRouter } from './appRouter';
import config from './config';
import { areaLogger } from './logger';

const logger = areaLogger('server')

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
  onError({ error, input, path, type }) {
    const log = error.code === 'INTERNAL_SERVER_ERROR' ? logger.error : logger.http;
    log('Error', type, path, 'with', input, error);
  },
});

server.listen(config.port, () => {
  logger.info('[user-service] Listening', config.port)
});
