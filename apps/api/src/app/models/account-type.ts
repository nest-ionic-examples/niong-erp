import { ObjectId } from 'bson';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'accountTypes'})
export class AccountType {
  _id: string | ObjectId;

  @Prop({default: ''})
  name: string;

  @Prop()
  sequence: number;
}

export const AccountTypeSchema = SchemaFactory.createForClass(AccountType);
