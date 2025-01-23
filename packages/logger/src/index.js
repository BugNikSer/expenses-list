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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var util_1 = require("util");
var _a = winston_1.default.format, combine = _a.combine, timestamp = _a.timestamp, printf = _a.printf, colorize = _a.colorize, json = _a.json, metadata = _a.metadata, label = _a.label;
var createLogger = function (_a) {
    var env = _a.env, app = _a.app;
    var mergeMeta = winston_1.default.format(function (info) {
        var message = info.message, metadata = info.metadata;
        var _a = metadata, area = _a.area, app = _a.app, timestamp = _a.timestamp, label = _a.label, rest = __rest(_a, ["area", "app", "timestamp", "label"]);
        info.area = area;
        info.app = app;
        info.timestamp = timestamp;
        info.label = label;
        delete info.metadata;
        var meta = Object.values(rest).map(function (item) {
            if (typeof item === 'object')
                return (0, util_1.inspect)(item, false, null, env === 'development');
            return item;
        });
        if (env === 'development')
            info.message = __spreadArray([message], meta, true).filter(Boolean);
        else
            info.message = __spreadArray([message], meta, true).filter(Boolean).join(' ');
        return info;
    });
    var winstonFormat = env === 'development'
        ? combine(timestamp({ format: 'DD.MM.YY HH:mm:ss' }), metadata(), mergeMeta(), printf(function (info) {
            var timestamp = info.timestamp, area = info.area, level = info.level, message = info.message;
            var applyColor = function (val) { return colorize().colorize(level, val); };
            var colorizedTimestamp = applyColor(String(timestamp));
            var colorizedArea = area ? applyColor("[".concat(area, "]")) : null;
            var colorizedLevel = applyColor(level);
            return __spreadArray([
                colorizedTimestamp,
                colorizedArea,
                colorizedLevel
            ], message, true).filter(Boolean).join(' ');
        }))
        : combine(label({ label: app, message: false }), timestamp({ format: 'DD.MM.YY HH:mm:ss' }), metadata(), mergeMeta(), json());
    winston_1.default.addColors({
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'blue',
        verbose: 'blue',
        debug: 'magenta',
        silly: 'cyan',
    });
    var baseLogger = winston_1.default.createLogger({
        transports: [new winston_1.default.transports.Console()],
        format: winstonFormat,
        level: 'silly',
    });
    var areaLogger = function (area) {
        return Object.keys(baseLogger.levels).reduce(function (acc, level) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[level] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return baseLogger.log(__assign({ level: level, message: '', area: area }, params));
            }, _a)));
        }, {});
    };
    return { areaLogger: areaLogger };
};
exports.default = createLogger;
