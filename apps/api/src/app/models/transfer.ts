import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Department } from './department';
import { JobPosition } from './job-position';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Employee } from './employee';
import { WeeklyScheduler } from './weekly-scheduler';
import { ScheduledPay } from './scheduled-pay';
import { PayrollStructureType } from './payroll-structure-type';

@Schema({collection: 'transfers'})
export class Transfer {
  @Prop()
  date: Date;

  @Prop({type: String, enum: ['hired', 'fired', 'updated', 'transfer'], default: 'updated'})
  status: string;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: string | ObjectID | Department;

  @Prop({type: ObjectId, ref: 'JobPosition', default: null})
  jobPosition: string | ObjectID | JobPosition;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  manager: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'WeeklyScheduler', default: null})
  weeklyScheduler: string | ObjectID | WeeklyScheduler;

  @Prop({type: String, default: ''})
  jobType: string;

  @Prop({type: Number, default: 0})
  salary: number;

  @Prop({type: String, default: ''})
  info: string;

  @Prop({type: ObjectId, ref: 'Employees'})
  employee: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'ScheduledPay', default: null})
  scheduledPay: string | ObjectID | ScheduledPay;

  @Prop({type: ObjectId, ref: 'PayrollStructureType', default: null})
  payrollStructureType: string | ObjectID | PayrollStructureType;

  @Prop({type: Number})
  transferKey: number;

}

export const transferSchema = SchemaFactory.createForClass(Transfer);
