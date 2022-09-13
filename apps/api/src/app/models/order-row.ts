import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'orderRows'})
export class OrderRow {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: ObjectID;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: Number, default: 0})
  quantity: number;

  @Prop([{
    _id: false,
    taxCode: {type: ObjectId, ref: 'taxes', default: null},
    tax: {type: Number, default: 0}
  }])
  taxes: {
    taxCode: ObjectID,
    tax: number
  }[];

  @Prop()
  description: string;

  @Prop({type: Number, default: 0})
  unitPrice: number;

  @Prop({type: Number, default: 0})
  costPrice: number;

  @Prop({type: Number, default: 0})
  subTotal: number;

  @Prop({type: Number, default: 0})
  nominalCode: number;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  debitAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  creditAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop()
  integrationId: string;

  @Prop({type: Boolean, default: false})
  isFromManufacturingForReceive: boolean;

}

export const OrderRowSchema = SchemaFactory.createForClass(OrderRow);
