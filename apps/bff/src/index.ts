import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { appRouter } from './trpc';
import config from './utils/config';

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
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
