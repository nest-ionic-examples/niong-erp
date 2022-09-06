import { ObjectId } from 'bson';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class AccountType {
  _id: string | ObjectId;

  @Prop({default: ''})
  name: string;

  @Prop()
  sequence: number;
}

export const AccountTypeSchema = SchemaFactory.createForClass(AccountType);
