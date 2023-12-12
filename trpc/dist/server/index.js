"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const todoType = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoType).mutation((opts) => {
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
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
});
server.listen(3000);
