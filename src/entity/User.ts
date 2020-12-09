import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text")
  name: string;

  @Field()
  @Column("text")
  username: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column("text")
  password: string;

  @Field()
  @Column("text")
  photo: string;
}
