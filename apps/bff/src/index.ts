import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';

import { appRouter } from './trpc';
import { createContext } from './trpc/context';
import config from './utils/config';
import { areaLogger } from './utils/logger';

const logger = areaLogger('init');
const trpcLogger = areaLogger('trpc');

const app = express();
const { port } = config;

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser())

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
    onError({ error, type, path, input, ctx, req }) {
      trpcLogger.http({ error, type, path, input, ctx, req });
    }
  }),
);

app.listen(port, () => {
  logger.info('Listening port', port);
});
