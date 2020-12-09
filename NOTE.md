1.先 typeorm init,然后创建数据库，修改 ormconfig.json 里的配置。下载各依赖项,在 index.ts 中 createConnection 连接数据库.

2.创建 Entity 类型，然后再 module 中创建对应的 Resolver,同一类型的 Resolver 可以放在同一个目录下，创建对应的 Input 数据类型，并根据情况创建客户化验证

3.yarn add express-session connect-redis ioredis cors,再 index.ts 引入 session 中间件，中间件要再 applloServer.applyMiddleWare 之前
