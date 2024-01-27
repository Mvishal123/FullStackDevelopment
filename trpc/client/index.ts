import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
import jwt from "jsonwebtoken";

// Replace these values with your actual secret and credentials
const SECRET = "your-secret-key";
const username = "Vamos";
const password = "Vamos123";

const hardcodedToken = jwt.sign({ username, password }, SECRET, {
  expiresIn: "1h",
});

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      headers() {
        return {
          authorization: `Bearer ${hardcodedToken}`,
        };
      },
    }),
  ],
});

const main = async () => {
  try {
    console.log("Inside main function");

    const todo = await trpc.createTodo.mutate({
      title: "go to the store",
      description: "buy milk",
    });

    console.log("TODO:", todo);

    const data = await trpc.auth.mutate({
      username: "Vishal",
      password: "password",
    });

    console.log("TOKEN:", data.token);

    // Verify the token
    const verifiedToken = jwt.verify(data.token, SECRET);
    console.log("VERIFIED TOKEN:", verifiedToken);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();
