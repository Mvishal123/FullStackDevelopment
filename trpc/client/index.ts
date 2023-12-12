import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

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
};

main();
