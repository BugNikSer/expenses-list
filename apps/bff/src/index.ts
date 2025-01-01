import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { appRouter, TAppRouter } from './trpc';

dotenv.config();

const app = express();
const port = process.env.PORT;

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
