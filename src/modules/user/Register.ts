import * as bcrypt from "bcryptjs";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/User";

@Resolver()
export class RegisterResolver {
  @Mutation(() => String)
  async register(
    @Arg("name") name: string,
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
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
