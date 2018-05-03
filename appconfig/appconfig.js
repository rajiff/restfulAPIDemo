const appConfig = {
  development: require('./env/DEV'),
  test: require('./env/TEST'),
  production: require('./env/PROD')
};

let env = process.env.NODE_ENV || 'development';

process.stdout.write(`\nInitilising app with configuring for environment: ${env}`);

const effectiveConfig = appConfig[env];

process.stdout.write(`\nPicking up config settings as: ${JSON.stringify(effectiveConfig)}\n`);

module.exports = effectiveConfig;
