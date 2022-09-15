import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';
import { ChartOfAccount } from './chart-of-account';

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
    type: {
      name: {type: String, default: 'USD'}
    }
  })
  currency: {
    name: string
  };

  @Prop({type: String, default: ''})
  description: string;

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
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  debitAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  creditAccount: string | ObjectID | ChartOfAccount;

}

export const journalSchema = SchemaFactory.createForClass(Journal);
