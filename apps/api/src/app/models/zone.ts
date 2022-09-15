import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Warehouse } from './warehouse';
import { User } from './user';


@Schema({collection: 'zones'})
export class Zone {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

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
}

export const zoneSchema = SchemaFactory.createForClass(Zone);
