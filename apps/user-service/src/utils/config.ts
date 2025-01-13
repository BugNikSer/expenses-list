import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  env: process.env.ENV,
  authSecreteKey: process.env.AUTH_SECRET_KEY,
};
