import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import session from "express-session";
import connectRedis from "connect-redis";
import { createConnection } from "typeorm";
import { HelloResolver } from "./modules/user/HelloResolvers";
import { RegisterResolver } from "./modules/user/Register";
import cors from "cors";
import { redis } from "./redis";
import { LoginResolver } from "./modules/user/Login";
import { MeResolver } from "./modules/user/Me";

const main = async () => {
  dotenv.config();
  const app = express();
  //session middleware

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "boring",
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, //7 years
      },
    })
  );

  app.use(cors({ credentials: true, origin: `${process.env.CLIENT_URL}` }));

  app.get("/", (_req, res) => res.send("Hello Graphql!"));

  await createConnection();

  const schema = await buildSchema({
    resolvers: [HelloResolver, RegisterResolver, LoginResolver, MeResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ res, req }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log("express server started on http://localhost:5000/graphql");
  });
};

main();
