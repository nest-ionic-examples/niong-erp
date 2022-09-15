import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Product } from './product';
import { Warehouse } from './warehouse';
import { Location } from './location';
import { GoodsInNote, GoodsNote } from './goods-note';
import { OrderRow } from './order-row';

@Schema({collection: 'productsAvailability'})
export class ProductAvailability {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: string | ObjectID | Product;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

  @Prop({type: ObjectId, ref: 'Location', default: null})
  location: string | ObjectID | Location;

  @Prop({type: ObjectId, ref: 'GoodsInNote', default: null})
  goodsInNote: string | ObjectID | GoodsInNote;

  @Prop({type: Number, default: 0})
  cost: number;

  @Prop({type: Number, default: 0})
  onHand: number;

  @Prop([{
    goodsNoteId: {type: ObjectId, ref: 'GoodsOutNote', default: null},
    quantity: {type: Number, default: 0}
  }])
  goodsOutNotes: {
    goodsNoteId: string | ObjectID | GoodsNote,
    quantity: number
  }[];

  @Prop({type: Boolean, default: false})
  isJob: boolean;

  @Prop([{
    orderRowId: {type: ObjectId, ref: 'OrderRow', default: null},
    quantity: {type: Number, default: 0}
  }])
  orderRows: {
    orderRowId: string | ObjectID | OrderRow,
    quantity: number
  }[];

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: Boolean, default: false})
  archived: boolean;

}

export const productAvailabilitySchema = SchemaFactory.createForClass(ProductAvailability);
