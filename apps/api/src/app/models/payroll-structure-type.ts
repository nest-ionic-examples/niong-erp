import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { PayrollComponentType } from './payroll-component-type';

@Schema({collection: 'payrollStructureTypes'})
export class PayrollStructureType {
  @Prop({type: String, default: ''})
  name: string;

  @Prop([{type: ObjectId, ref: 'PayrollComponentType', default: null}])
  earnings: (string | ObjectID | PayrollComponentType)[];

  @Prop([{type: ObjectId, ref: 'PayrollComponentType', default: null}])
  deductions: (string | ObjectID | PayrollComponentType)[];

}

export const payrollStructureTypeSchema = SchemaFactory.createForClass(PayrollStructureType);
