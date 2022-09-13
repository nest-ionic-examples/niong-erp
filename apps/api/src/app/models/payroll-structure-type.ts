import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'payrollStructureTypes'})
export class PayrollStructureType {
  @Prop({type: String, default: ''})
  name: string;

  @Prop([{type: ObjectId, ref: 'payrollComponentType', default: null}])
  earnings: ObjectID[];

  @Prop([{type: ObjectId, ref: 'payrollComponentType', default: null}])
  deductions: ObjectID[];

}

export const payrollStructureTypeSchema = SchemaFactory.createForClass(PayrollStructureType);
