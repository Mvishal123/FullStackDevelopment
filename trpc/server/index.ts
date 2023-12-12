import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import jwt from "jsonwebtoken";

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

  auth: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation((opts) => {
      const username = opts.input.username;
      const password = opts.input.password;

      const token = jwt.sign(
        {
          username,
          password,
        },
        "SECRET",
        { expiresIn: "1h" }
      );

      return {
        token,
      };
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
