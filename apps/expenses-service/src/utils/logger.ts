import createLogger from '@expenses-list/logger';
import config from './config';

export const areaLogger = createLogger({ env: config.env, app: 'expenses-service' }).areaLogger;
