import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema(undefined)
export class Journal {
  @Prop({type: String, required: true})
  name: string;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: String, enum: ['invoice', 'payment', 'accrual', 'writeoff'], default: 'Invoice'})
  transaction: string;

  @Prop({
    name: {type: String, default: 'USD'}
  })
  currency: {
    name: string
  };

  @Prop({type: String, default: ''})
  description: string;

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
    date: {type: Date}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  debitAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  creditAccount: ObjectID;

}

export const JournalSchema = SchemaFactory.createForClass(Journal);