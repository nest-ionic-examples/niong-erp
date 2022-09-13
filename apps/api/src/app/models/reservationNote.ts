import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'GoodsOutNote'})
export class GoodsOutNote {
  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop()
  releaseDate: Date;

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop([{type: ObjectId, ref: 'orderRows', default: null}])
  salesOrderRowId: ObjectID[];

  @Prop()
  quantity: number;

  @Prop({type: String, default: ''})
  name: string;

}

export const goodsOutNoteSchema = SchemaFactory.createForClass(GoodsOutNote);
