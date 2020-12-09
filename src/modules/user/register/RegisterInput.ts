//输入数据类型及长度验证
import { IsEmail, Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./IsEmailAreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 50)
  name: string;

  @Field()
  @Length(1, 50)
  username: string;

  @Field()
  @Length(1, 50)
  @IsEmail()
  @IsEmailAlreadyExist({ message: "该邮箱已被注册" })
  email: string;

  @Field()
  @MinLength(6, { message: "密码不得小于6位字符" })
  password: string;
}
