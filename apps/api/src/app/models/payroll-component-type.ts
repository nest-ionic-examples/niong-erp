import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'payrollComponentTypes'})
export class PayrollComponentType {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({
    type: String,
    default: 'earnings',
    enum: ['earnings', 'deductions']
  })
  type: string;

  @Prop({type: String, default: ''})
  description: string;

  @Prop({type: Array, default: []})
  formula: [];

  @Prop()
  minRange: number;

  @Prop()
  maxRange: number;

}

export const payrollComponentTypeSchema = SchemaFactory.createForClass(PayrollComponentType);
