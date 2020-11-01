// // Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "paypay",
      port: "5432",
    },
    migrations: {
      directory: "./server/migrations/",
    },
    seeds: {
      directory: "./server/seeds/",
    },
  },
};
