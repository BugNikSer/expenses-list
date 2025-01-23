import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './trpc/router';
import config from './utils/config';
import { areaLogger } from './utils/logger';

const logger = areaLogger('server');

const server = createHTTPServer({
  router: appRouter,
  onError({ error, input, path, type }) {
    const log = error.code === 'INTERNAL_SERVER_ERROR' ? logger.error : logger.http;
    log('Error', type, path, 'with', input, error);
  },
});

server.listen(config.port, () => {
  logger.info('Listening port', config.port)
});
