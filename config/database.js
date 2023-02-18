module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 4021),
      database: env("DATABASE_NAME", "db"),
      user: env("DATABASE_USERNAME", "db"),
      password: env("DATABASE_PASSWORD", "db"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
  },
  // connection: {
  //   client: "sqlite",
  //   connection: {
  //     filename: path.join(__dirname, "..", env("DATABASE_FILENAME", ".tmp/data.db")),
  //   },
  //   useNullAsDefault: true,
  // },
});
