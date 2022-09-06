import { ObjectId } from 'bson';
import { SchemaFactory } from '@nestjs/mongoose';

export class User {
  _id: string | ObjectId;

  username;

  password;

  loggedIn;

  role;
}

export const UserModel = SchemaFactory.createForClass(User);
