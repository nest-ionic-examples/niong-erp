import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Employee } from './employee';

@Schema({collection: 'PayRoll'})
export class PayRoll {
  @Prop()
  ID: number;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  employee: string | ObjectID | Employee;

  @Prop()
  year: number;

  @Prop()
  month: number;

  @Prop()
  dataKey: number;

  @Prop({type: Array, default: []})
  earnings: [];

  @Prop({type: Array, default: []})
  deductions: [];

  @Prop()
  calc: number;

  @Prop()
  paid: number;

  @Prop()
  diff: number;

  @Prop({type: Date, default: null})
  date: Date;

  @Prop({type: Boolean, default: false})
  status: boolean;
}

export const payRollSchema = SchemaFactory.createForClass(PayRoll);


payRollSchema.set('toJSON', {virtuals: true});
