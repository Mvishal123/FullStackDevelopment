import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
import jwt from "jsonwebtoken";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

const main = async () => {
  console.log("Inside main function");

  const todo = trpc.createTodo.mutate({
    title: "go to the store",
    description: "buy milk",
  });

  const data = await trpc.auth.mutate({
    username: "Vishal",
    password: "password",
  });

  console.log("TOKEN:", data.token);
  const verifiedToken = jwt.verify(data.token, "SECRET");
  console.log("VERIFIED TOKEN:", verifiedToken);
  
};

main();
