import { Body, Controller, Get, Inject, Post, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user';
import { sign } from 'jsonwebtoken';
import { compare, hash } from 'bcrypt';
import { CurrentUser } from './current-user.decorator';
import { Model } from 'mongoose';

@Controller('')
export class AuthController {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Post('login')
  async login(@Body() credentials) {
    const user = await this.userModel.findOne({user: credentials.username}).exec();
    if (!user) throw new UnauthorizedException('The username/password combination is invalid');

    const isMatch = await compare(credentials.password, user.pass);
    if (!isMatch) throw new UnauthorizedException('The username/password combination is invalid');

    // user.credentials = {};

    await user.save();

    return {token: sign({
        _id: user._id,
        user: user.login,
        role: user.login,
      }, process.env.JWT_SECRET_PASSWORD, {expiresIn: '1h'})};
  }

  @Get('me')
  me(@CurrentUser() user) {
    return this.userModel.findById(user._id);
  }

  @Get('logout')
  async logout(@CurrentUser() user) {
    await this.userModel.findByIdAndUpdate(user._id, {loggedIn: false});
    return {message: 'Logout Successfully'};
  }

  @Post('sign-up')
  async signup(@Body() signupCredentials) {
    signupCredentials.password = await hash(signupCredentials.password, 10);
    await this.userModel.create(signupCredentials);
    return {message: 'User Created Successfully'};
  }
}
