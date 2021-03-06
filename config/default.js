// DEFAULTS
// override this in `${environment}.js`

module.exports = {
  log: {
    timestamp: true,
    level: 'debug'
  },
  mongodb: {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: process.env.MONGO_DB_NAME || 'test',
    ssl: process.env.MONGO_SSL || false,
    ssl_validate: process.env.MONGO_SSL_VALIDATE || false
  },
  elasticsearch: {
    host: process.env.ES_HOST || 'localhost',
    port: process.env.ES_PORT || 9200,
    ssl: process.env.ES_SSL || false,
    user: process.env.ES_USER || null,
    pass: process.env.ES_PASS || null,
    index: process.env.ES_INDEX || 'pullypusher',
    type: process.env.ES_TYPE || 'stat',
    log: process.env.ES_LOG || 'info'
  },
  http: {
    host: process.env.HTTP_HOST || 'localhost',
    path: process.env.HTTP_PATH || '/'
  }
};
