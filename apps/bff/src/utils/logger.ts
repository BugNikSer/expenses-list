import winston from 'winston';
import config from './config';

const { combine, timestamp, printf, colorize, json } = winston.format;

const formatMeta = (meta: Record<symbol, any>) => {
  let result: (string | number)[] = []

  const formatItem = (item: any) => {
    if (typeof item === 'object') return JSON.stringify(item, null, 2)
    return item
  }

  // process splat
  const splat = meta[Symbol.for('splat')];
  if (splat && splat.length) {
    const splatList = splat.map(formatItem)
    result = [...result, splatList]
  }

  // process others
  const othersList = Object.values(meta).map(formatItem)
  result = [...result, ...othersList]

  return result
};

const winstonFormat = config.environment === 'DEV'
  ? combine(
    timestamp({ format: 'HH:mm:ss DD.MM.YY' }),
    colorize({ level: true,  }),
    printf(info => {
      const { timestamp, area, app, level, message, ...meta } = info;

      return [
        `[${timestamp}]`,
        area && `[${area}]`,
        level,
        message,
        ...formatMeta(meta),
      ].filter(Boolean).join(' ');
    }),
  ): json()

const baseLogger = winston.createLogger({
  defaultMeta: { app: 'bff' },
  transports: [new winston.transports.Console()],
  format: winstonFormat,
})

export const areaLogger = (area: string) => {
  return Object.keys(baseLogger.levels).reduce((acc, level) => ({
    ...acc,
    [level]: (message, ...params) => baseLogger.log({ level, message, area, ...params })
  }), {} as Record<keyof winston.config.AbstractConfigSetLevels, (message: string, ...params: any[]) => void>)
}
