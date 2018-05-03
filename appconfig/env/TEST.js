let config = {
	APP_NAME: `I am ${process.env.NODE_ENV}`,
  PORT: process.env.PORT || 3000,
  LOG_PATH: process.env.LOG_PATH || './qa_logs',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://qa-db-host:27017/nodeapp'
};

module.exports = config;
