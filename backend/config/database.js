// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "skyfall-dbs.cy85u82by6ya.eu-central-1.rds.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "skyfall"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Skyfall2021!"),
      },
      options: {
        ssl: false,
      },
    },
  },
});
