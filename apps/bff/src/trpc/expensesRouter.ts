import { z } from "zod";

import { router, protectedProcedure } from "./trpc";

export const expensesRouter = router({
  list: protectedProcedure
    .input(z.object({ page: z.number(), pageSize: z.number() }))
    .query(({ input }) => {
      return [
        { value: input.page, label: 'page' },
        { value: input.pageSize, label: 'pageSize' },
      ]
    })
})