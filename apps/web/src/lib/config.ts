const config = {
  serverUrl: String(process.env.SERVER_URL),
  bffUrl: String(process.env.BFF_URL),
  userServiceUrl: String(process.env.USER_SERVICE_URL),
  expenseServiceUrl: String(process.env.EXPENSE_SERVICE_URL),
  authSecreteKey: String(process.env.AUTH_SECRET_KEY),
  env: process.env.NODE_ENV,
};

export default config;
