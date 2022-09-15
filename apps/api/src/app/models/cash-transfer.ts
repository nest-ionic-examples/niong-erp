import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { ChartOfAccount } from './chart-of-account';
import { Currency } from './currency';

@Schema({collection: 'cashTransfer'})
export class CashTransfer {
  @Prop()
  ID: number;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: Number, default: 0})
  amount: number;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  debitAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  creditAccount: string | ObjectID | ChartOfAccount;

  @Prop({
    type: {
      _id: {type: String, ref: 'Currency', default: null},
      rate: {type: Number, default: 1}
    }
  })
  currency: {
    _id: string | Currency,
    rate: number
  };

}

export const cashTransferSchema = SchemaFactory.createForClass(CashTransfer);


cashTransferSchema.pre('save', function (this: Document & CashTransfer, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'cashTransfer'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'CT' + rate.value.seq;

    next();
  });
});

cashTransferSchema.set('toJSON', {getters: true});


