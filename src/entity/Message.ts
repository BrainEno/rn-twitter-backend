import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("timestamp")
  createdAt: Date;

  @Field()
  @ManyToOne(() => User, (user) => user.email)
  user: User;

  @Field()
  @Column("text")
  content: string;

  @Field()
  @Column("text")
  image?: string;

  @Field()
  @Column("int")
  numberOfComments?: number;

  @Field()
  @Column("int")
  numberOfLikes?: number;

  @Field()
  @Column("int")
  numberOfRetweets?: number;
}
