import bcrypt from "bcryptjs";
import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver(User)
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg("data") { name, username, email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const initialPhoto =
      "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png";

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      photo: initialPhoto,
    }).save();

    return user;
  }
}
