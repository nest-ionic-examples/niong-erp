import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'MonthHours'})
export class MonthHours {
  @Prop()
  ID: number;

  @Prop({type: Number})
  month: number;

  @Prop({type: Number})
  hours: number;

  @Prop({type: Number})
  year: number;

  @Prop({type: Number})
  expenseCoefficient: number;

  @Prop({type: Number})
  fixedExpense: number;

  @Prop({type: Number, default: 0})
  idleBudget: number;

  @Prop({type: Number, default: 0})
  vacationBudget: number;

  @Prop({type: Number, default: 0})
  adminBudget: number;

  @Prop({type: Number, default: 0})
  marketingBudget: number;

  @Prop({type: Number, default: 0})
  adminSalaryBudget: number;

  @Prop({type: Number, default: 0})
  estimatedHours: number;

  @Prop({type: Number, default: 0})
  actualHours: number;

  @Prop({type: Number, default: 0})
  overheadRate: number;

  @Prop({type: Number, default: 0})
  dateByMonth: number;

}

export const monthHoursSchema = SchemaFactory.createForClass(MonthHours);
