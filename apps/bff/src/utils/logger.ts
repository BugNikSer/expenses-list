import winston from 'winston';
import config from './config';

type TLogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'
const { combine, timestamp, printf, colorize, json, metadata, label, errors } = winston.format;

const mergeMeta = winston.format((info: winston.Logform.TransformableInfo) => {
  type TMeta = Record<string, any>
  const { message, metadata } = info;
  const { area, app, timestamp, label, ...rest } = metadata as TMeta;

  info.area = area;
  info.app = app;
  info.timestamp = timestamp;
  info.label = label;

  delete info.metadata

  const meta = Object.values(rest).map(item => {
    if (typeof item === 'object') return JSON.stringify(item)
    return item
  })

  info.message = [message, ...meta].filter(Boolean).join(' ')

  return info;
})

const winstonFormat = config.environment === 'DEV'
  ? combine(
    errors({ stack: true }),
    timestamp({ format: 'DD.MM.YY HH:mm:ss' }),
    metadata(),
    mergeMeta(),
    printf(info => {
      const { timestamp, area, level, message } = info;

      const applyColor = (val: string) => colorize().colorize(level as TLogLevel, val)

      const colorizedTimestamp = applyColor(`[${timestamp}]`)
      const colorizedArea = area ? applyColor(`[${area}]`) : null
      const colorizedLevel = applyColor(level)

      return [
        colorizedTimestamp,
        colorizedArea,
        colorizedLevel,
        message,
      ].filter(Boolean).join(' ');
    })
  )
  : combine(
    label({ label: 'bff', message: false }),
    errors({ stack: true }),
    timestamp({ format: 'DD.MM.YY HH:mm:ss' }),
    metadata(),
    mergeMeta(),
    json(),
  )

const baseLogger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winstonFormat,
})

export const areaLogger = (area: string) => {
  return Object.keys(baseLogger.levels).reduce((acc, level) => ({
    ...acc,
    [level]: (...params: any[]) => baseLogger.log({ level, message: '', area, ...params })
  }), {} as Record<TLogLevel, (...params: any[]) => void>)
}
