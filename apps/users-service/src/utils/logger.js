"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaLogger = void 0;
var logger_1 = __importDefault(require("@expenses-list/logger"));
var config_1 = __importDefault(require("./config"));
exports.areaLogger = (0, logger_1.default)({ env: config_1.default.env, app: 'users-service' }).areaLogger;
