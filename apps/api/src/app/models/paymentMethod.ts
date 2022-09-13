import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'PaymentMethod'})
export class PaymentMethod {
  @Prop({type: String})
  name: string;

  @Prop({type: String})
  account: string;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  chartAccount: ObjectID;

  @Prop({type: String})
  currency: string;

  @Prop({type: String})
  bank: string;

  @Prop({type: String, default: ''})
  owner: string;

  @Prop({type: String, default: ''})
  fullName: string;

  @Prop({type: String, default: ''})
  address: string;

  @Prop({type: String, default: ''})
  swiftCode: string;

}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);
