import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const todoType = z.object({
  title: z.string(),
  description: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoType).mutation((opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    // db stuff

    //response
    return {
      status: "success",
      id: "1",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
