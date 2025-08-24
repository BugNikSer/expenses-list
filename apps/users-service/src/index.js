"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var standalone_1 = require("@trpc/server/adapters/standalone");
var cors_1 = __importDefault(require("cors"));
var appRouter_1 = require("./trpc/appRouter");
var config_1 = __importDefault(require("./utils/config"));
var logger_1 = require("./utils/logger");
var logger = (0, logger_1.areaLogger)('server');
var server = (0, standalone_1.createHTTPServer)({
    router: appRouter_1.appRouter,
    middleware: (0, cors_1.default)(),
    onError: function (_a) {
        var error = _a.error, input = _a.input, path = _a.path, type = _a.type;
        var log = error.code === 'INTERNAL_SERVER_ERROR' ? logger.error : logger.http;
        log('Error', type, path, 'with', input, error);
    },
});
server.listen(config_1.default.port, function () {
    logger.info('Listening port', config_1.default.port);
});
