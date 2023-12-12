"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@trpc/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const trpc = (0, client_1.createTRPCProxyClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: "http://localhost:3000",
        }),
    ],
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Inside main function");
    const todo = trpc.createTodo.mutate({
        title: "go to the store",
        description: "buy milk",
    });
    const data = yield trpc.auth.mutate({
        username: "Vishal",
        password: "password",
    });
    console.log("TOKEN:", data.token);
    const verifiedToken = jsonwebtoken_1.default.verify(data.token, "SECRET");
    console.log("VERIFIED TOKEN:", verifiedToken);
});
main();
