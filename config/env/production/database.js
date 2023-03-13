// path: ./config/env/production/database.js

// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     connection: {
//       client: 'postgres',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         ssl: { rejectUnauthorized: false },
//       },
//       debug: false,
//     },
//   }
// };

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
};
