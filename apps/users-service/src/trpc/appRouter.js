"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var trpc_1 = require("./trpc");
var router_1 = require("../features/token/router");
var router_2 = require("../features/user/router");
exports.appRouter = (0, trpc_1.router)({
    tokens: router_1.tokenRouter,
    user: router_2.userRouter,
});
