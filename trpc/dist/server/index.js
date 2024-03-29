"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const todoType = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoType).mutation((opts) => {
        const title = opts.input.title;
        const description = opts.input.description;
        // db stuff
        // response
        return {
            status: "success",
            id: "1",
        };
    }),
    auth: trpc_1.publicProcedure
        .input(zod_1.z.object({
        username: zod_1.z.string(),
        password: zod_1.z.string(),
    }))
        .mutation((opts) => {
        const username = opts.input.username;
        const password = opts.input.password;
        const token = jsonwebtoken_1.default.sign({
            username,
            password,
        }, "SECRET", { expiresIn: "1h" });
        console.log("CTX", opts.ctx.password, opts.ctx.username);
        return {
            token,
        };
    }),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext: (opts) => {
        const authorizationHeader = opts.req.headers["authorization"];
        if (!authorizationHeader) {
            throw new Error("Authorization header is missing");
        }
        const [bearer, token] = authorizationHeader.split(" ");
        try {
            const data = jsonwebtoken_1.default.verify(token, "SECRET");
            const decodedToken = data;
            console.log("DECODED TOKEN:", decodedToken);
            return {
                username: "Vishal",
                password: "123",
            };
        }
        catch (error) {
            throw new Error("Invalid or expired token");
        }
    },
});
server.listen(3000);
