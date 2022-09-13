import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'journalentries', discriminatorKey: '_type'})
export class JournalEntries {
  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: ObjectId, ref: 'journal', default: null})
  journal: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  account: ObjectID;

  @Prop({
    _id: {type: String, ref: 'currency', default: null},
    rate: {type: Number, default: 1}
  })
  currency: {
    _id: string,
    rate: number
  };

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

  @Prop({
    _id: {type: ObjectId, default: null},
    model: {type: String, default: 'Invoice'},
    employee: {type: ObjectId, default: null},
    name: {type: String, default: ''}
  })
  sourceDocument: {
    _id: ObjectID,
    model: string,
    employee: ObjectID,
    name: string
  };

  @Prop({type: Number, default: 0})
  debit: number;

  @Prop({type: Number, default: 0})
  credit: number;

  @Prop({type: Number, default: 0})
  debitFC: number;

  @Prop({type: Number, default: 0})
  creditFC: number;

  @Prop({type: Boolean, default: false})
  reversed: boolean;

  @Prop({type: String})
  timestamp: string;

}

export const journalEntriesSchema = SchemaFactory.createForClass(JournalEntries);


const manualEntrySchema = SchemaFactory.createForClass(JournalEntries);
