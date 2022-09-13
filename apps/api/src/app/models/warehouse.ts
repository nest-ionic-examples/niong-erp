import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'warehouse'})
export class Warehouse {
  @Prop({type: String, default: '', required: true})
  name: string;

  @Prop({
    street: {type: String, default: ''},
    city: {type: String, default: ''},
    state: {type: String, default: ''},
    zip: {type: String, default: ''},
    country: {type: String, default: ''}
  })
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  };

  @Prop({type: Boolean, default: true})
  isOwn: boolean;

  @Prop({type: Boolean, default: false})
  main: boolean;

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

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  account: ObjectID;

}

export const warehouseSchema = SchemaFactory.createForClass(Warehouse);
