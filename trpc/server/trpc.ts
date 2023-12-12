import { initTRPC } from "@trpc/server";

interface contextType {
  username: string;
  userId: string;
}

const t = initTRPC.context<contextType>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
