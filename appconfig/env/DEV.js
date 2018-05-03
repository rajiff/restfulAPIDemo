let config = {
	APP_NAME: `I am ${process.env.NODE_ENV}`,
  PORT: process.env.PORT || 3000,
  LOG_PATH: process.env.LOG_PATH || './logs',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/nodeapp'
};

module.exports = config;
