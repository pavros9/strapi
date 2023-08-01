module.exports = ({ env }) => ({
  url: env("HOST_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
