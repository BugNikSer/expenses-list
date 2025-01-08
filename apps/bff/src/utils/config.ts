import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT,
  authSecreteKey: process.env.AUTH_SECRET_KEY,
};
