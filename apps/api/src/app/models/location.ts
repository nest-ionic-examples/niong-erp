import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';

@Schema({collection: 'locations'})
export class Location {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  groupingA: string;

  @Prop({type: String, default: ''})
  groupingB: string;

  @Prop({type: String, default: ''})
  groupingC: string;

  @Prop({type: String, default: ''})
  groupingD: string;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: ObjectId, ref: 'zone', default: null})
  zone: ObjectID;

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

export const locationsSchema = SchemaFactory.createForClass(Location);
