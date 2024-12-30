import { Injectable, INestApplication } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from './trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {
    console.log('---------------------')
    console.log(trpc)
    console.log('---------------------')
    this.trpc = trpc;
  }

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        const { name } = input;
        return { greeting: `Hello ${name || 'unknown'}` }
      })
  });

  async applyMiddleware (app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter })
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
