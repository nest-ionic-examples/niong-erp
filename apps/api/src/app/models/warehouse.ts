import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';
import { ChartOfAccount } from './chart-of-account';

@Schema({collection: 'warehouse'})
export class Warehouse {
  @Prop({type: String, default: '', required: true})
  name: string;

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      country: {type: String, default: ''}
    }
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

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  account: string | ObjectID | ChartOfAccount;

}

export const warehouseSchema = SchemaFactory.createForClass(Warehouse);
