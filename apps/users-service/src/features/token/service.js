"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var HOUR = 60000;
var DAY = 86400000;
var tokenService = {
    generateTokens: function (userId, key) {
        var data = { userId: userId, ts: Number(new Date()) };
        var token = jsonwebtoken_1.default.sign(data, key, { expiresIn: HOUR });
        var refreshToken = jsonwebtoken_1.default.sign(data, key, { expiresIn: DAY });
        return { token: token, refreshToken: refreshToken };
    },
    parseTokens: function (token, refreshToken, key) {
        try {
            var payload = jsonwebtoken_1.default.verify(token, key);
            return { payload: payload, expired: false };
        }
        catch (e) {
            try {
                var payload = jsonwebtoken_1.default.verify(refreshToken, key);
                return { payload: payload, expired: true };
            }
            catch (e) {
                return null;
            }
        }
        ;
    }
};
exports.default = tokenService;
