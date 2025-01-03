import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { appRouter } from './trpc';
import config from './utils/config';
import { areaLogger } from './utils/logger';

const logger = areaLogger('init')

const app = express();
const { port } = config;

app.get('/', (req, res) => {
	res.send('Express + TypeScript Server');
});

app.use(cors())

app.use(
  '/trpc',
  createExpressMiddleware({ router: appRouter })
);

app.listen(port, () => {
  logger.info('Listening port', port);
});
