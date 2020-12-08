import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import { Post } from "./entites/Post";

const main = async () => {
  dotenv.config();
  //初始化数据库
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, {
    title: "my mikorm post!",
  });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
