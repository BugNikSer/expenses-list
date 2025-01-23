import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  authSecreteKey: process.env.AUTH_SECRET_KEY,
};
