import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'locations'})
export class Locations {
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

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: ObjectId, ref: 'zone', default: null})
  zone: ObjectID;

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

}

export const locationsSchema = SchemaFactory.createForClass(Locations);
