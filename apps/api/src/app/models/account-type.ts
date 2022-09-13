import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'accountTypes'})
export class AccountType {

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Number})
  sequence: number;

}

export const accountTypeSchema = SchemaFactory.createForClass(AccountType);
