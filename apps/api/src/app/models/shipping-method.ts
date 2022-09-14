import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


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

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  account: ObjectID;

}

export const shippingMethodSchema = SchemaFactory.createForClass(ShippingMethod);
