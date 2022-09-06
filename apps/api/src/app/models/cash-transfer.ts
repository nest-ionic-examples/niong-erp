import { Prop, Schema } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId

@Schema({collection: 'cashTransfer'})
export class CashTransfer {
  _id: string | ObjectID;

  @Prop({default: ''})
  name: string;

  @Prop({default: Date.now})
  date: Date;

  @Prop({default: 0})
  amount: number;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  debitAccount: string | ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  creditAccount: string | ObjectID;

  @Prop({
    _id: {type: String, ref: 'currency', default: null},
    rate: {type: Number, default: 1}
  })
  currency: {
    _id: string,
    rate: number
  };
}
