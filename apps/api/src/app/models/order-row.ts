import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Product } from './product';
import { Order } from './order';
import { Warehouse } from './warehouse';
import { Tax } from './tax';
import { ChartOfAccount } from './chart-of-account';
import { Integration } from './integration';

@Schema({collection: 'orderRows'})
export class OrderRow {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: string | ObjectID | Product;

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: string | ObjectID | Order;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

  @Prop({type: Number, default: 0})
  quantity: number;

  @Prop([{
    _id: false,
    taxCode: {type: ObjectId, ref: 'Tax', default: null},
    tax: {type: Number, default: 0}
  }])
  taxes: {
    taxCode: string | ObjectID | Tax,
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

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  debitAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  creditAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: string | ObjectID | Integration;

  @Prop()
  integrationId: string;

  @Prop({type: Boolean, default: false})
  isFromManufacturingForReceive: boolean;

}

export const orderRowSchema = SchemaFactory.createForClass(OrderRow);
