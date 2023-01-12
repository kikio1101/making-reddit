import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432, //PostgresQL uses port 5432
  username: process.env.DB_USER_ID,
  password: process.env.DB_USER_PASSWORD,
  database: "postgres",
  synchronize: process.env.NODE_ENV !== "production",
  logging: false,
  entities: ["src/entities/**/*.ts"],
  migrations: [],
  subscribers: [],
});
