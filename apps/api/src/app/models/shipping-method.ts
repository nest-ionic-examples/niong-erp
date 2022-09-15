import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { ChartOfAccount } from './chart-of-account';


@Schema({collection: 'shippingMethod'})
export class ShippingMethod {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  code: string;

  @Prop({type: Number, default: 0})
  price: number;

  @Prop([String])
  countries: string[];

  @Prop([Number])
  breaks: number[];

  @Prop({type: String, default: ''})
  breakType: string;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  account: string | ObjectID | ChartOfAccount;

}

export const shippingMethodSchema = SchemaFactory.createForClass(ShippingMethod);
