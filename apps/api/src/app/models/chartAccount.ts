import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'chartOfAccount'})
export class ChartAccount {
  @Prop({type: Number})
  code: number;

  @Prop({type: String, default: ''})
  account: string;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  subAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'accountsCategory', default: null})
  category: ObjectID;

  @Prop({type: Boolean, default: false})
  budgeted: boolean;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  payMethod: ObjectID;

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

}

export const chartAccountSchema = SchemaFactory.createForClass(ChartAccount);
