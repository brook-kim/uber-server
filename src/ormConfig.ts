import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  database: "uber",
  synchronize: true,
  logging: true,
  entities: ["entities/*.*"],
  host: process.env.DB_ENDPOINT,
  port: 3311,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;
