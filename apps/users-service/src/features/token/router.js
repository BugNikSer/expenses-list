"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRouter = void 0;
var zod_1 = require("zod");
var server_1 = require("@trpc/server");
var trpc_1 = require("../../trpc/trpc");
var config_1 = __importDefault(require("../../utils/config"));
var service_1 = __importDefault(require("./service"));
exports.tokenRouter = (0, trpc_1.router)({
    generate: trpc_1.procedure
        .input(zod_1.z.object({
        userId: zod_1.z.number(),
    }))
        .query(function (_a) {
        var userId = _a.input.userId;
        if (!config_1.default.authSecreteKey) {
            throw new server_1.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Bad configuration',
            });
        }
        return service_1.default.generateTokens(userId, config_1.default.authSecreteKey);
    }),
    parseBoth: trpc_1.procedure
        .input(zod_1.z.object({
        token: zod_1.z.string(),
        refreshToken: zod_1.z.string(),
    }))
        .query(function (_a) {
        var _b = _a.input, token = _b.token, refreshToken = _b.refreshToken;
        if (!config_1.default.authSecreteKey) {
            throw new server_1.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Bad configuration',
            });
        }
        var parsed = service_1.default.parseTokens(token, refreshToken, config_1.default.authSecreteKey);
        if (!parsed) {
            throw new server_1.TRPCError({
                code: 'UNPROCESSABLE_CONTENT',
                message: 'Unable to parse',
            });
        }
        var payload = parsed.payload, expired = parsed.expired;
        if (expired) {
            var tokens = service_1.default.generateTokens(payload.userId, config_1.default.authSecreteKey);
            return __assign(__assign({}, payload), { tokens: tokens });
        }
        else {
            return __assign(__assign({}, payload), { tokens: null });
        }
    })
});
