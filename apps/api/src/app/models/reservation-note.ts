import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Warehouse } from './warehouse';
import { User } from './user';
import { OrderRow } from './order-row';


@Schema({collection: 'GoodsOutNote'})
export class ReservationNote {
  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

  @Prop()
  releaseDate: Date;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop([{type: ObjectId, ref: 'OrderRow', default: null}])
  salesOrderRowId: (string | ObjectID | OrderRow)[];

  @Prop()
  quantity: number;

  @Prop({type: String, default: ''})
  name: string;

}

export const reservationNoteSchema = SchemaFactory.createForClass(ReservationNote);
