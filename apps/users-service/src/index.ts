import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

import { appRouter } from './trpc/appRouter';
import config from './utils/config';
import { areaLogger } from './utils/logger';

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
  logger.info('Listening port', config.port)
});
