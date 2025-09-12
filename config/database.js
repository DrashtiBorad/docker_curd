const env = require("dotenv");
const { DataSource } = require("typeorm");

env.config();

const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: 5432,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DATABASE,
  entities: ["./entities/*.js"],
  synchronize: true,
  logging: true,
});

module.exports = { appDataSource };
