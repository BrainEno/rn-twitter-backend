import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    emit: "ts", // migration generation mode
  },
  entities: [Post],
  dbName: "rn-twitter",
  type: "postgresql",
  debug: !__prod__,
  user: "postgres",
  password: process.env.DB_PASSWORD,
} as Parameters<typeof MikroORM.init>[0];
