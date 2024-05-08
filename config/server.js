module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
url: env('BASE_URL', 'http://trpl.tech/be'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
