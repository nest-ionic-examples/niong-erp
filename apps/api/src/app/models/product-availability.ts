import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'productsAvailability'})
export class ProductAvailability {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: ObjectId, ref: 'location', default: null})
  location: ObjectID;

  @Prop({type: ObjectId, ref: 'goodsInNotes', default: null})
  goodsInNote: ObjectID;

  @Prop({type: Number, default: 0})
  cost: number;

  @Prop({type: Number, default: 0})
  onHand: number;

  @Prop([{
    goodsNoteId: {type: ObjectId, ref: 'goodsOutNotes', default: null},
    quantity: {type: Number, default: 0}
  }])
  goodsOutNotes: {
    goodsNoteId: ObjectID,
    quantity: number
  }[];

  @Prop({type: Boolean, default: false})
  isJob: boolean;

  @Prop([{
    orderRowId: {type: ObjectId, ref: 'orderRows', default: null},
    quantity: {type: Number, default: 0}
  }])
  orderRows: {
    orderRowId: ObjectID,
    quantity: number
  }[];

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: Boolean, default: false})
  archived: boolean;

}

export const productAvailabilitySchema = SchemaFactory.createForClass(ProductAvailability);
