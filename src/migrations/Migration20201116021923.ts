import { Migration } from '@mikro-orm/migrations';

export class Migration20201116021923 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "content" varchar(255) not null, "image" varchar(255) not null, "number_of_comments" int4 not null, "number_of_likes" int4 not null, "number_of_retweets" int4 not null);');
  }

}
