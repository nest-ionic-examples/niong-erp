import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'transfers'})
export class Transfer {
  @Prop()
  date: Date;

  @Prop({type: String, enum: ['hired', 'fired', 'updated', 'transfer'], default: 'updated'})
  status: string;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: ObjectID;

  @Prop({type: ObjectId, ref: 'JobPosition', default: null})
  jobPosition: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  manager: ObjectID;

  @Prop({type: ObjectId, ref: 'weeklyScheduler', default: null})
  weeklyScheduler: ObjectID;

  @Prop({type: String, default: ''})
  jobType: string;

  @Prop({type: Number, default: 0})
  salary: number;

  @Prop({type: String, default: ''})
  info: string;

  @Prop({type: ObjectId, ref: 'Employees'})
  employee: ObjectID;

  @Prop({type: ObjectId, ref: 'scheduledPays', default: null})
  scheduledPay: ObjectID;

  @Prop({type: ObjectId, ref: 'payrollStructureTypes', default: null})
  payrollStructureType: ObjectID;

  @Prop({type: Number})
  transferKey: number;

}

export const transferSchema = SchemaFactory.createForClass(Transfer);
