import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { HelloResolver } from "./modules/user/HelloResolvers";
import cors from "cors";

(async () => {
  dotenv.config();
  const app = express();

  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

  app.get("/", (_req, res) => res.send("Hello world!"));

  await createConnection();

  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  apolloServer.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log("express server started on http://localhost:5000/graphql");
  });
})();
