import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'weeklySchedulers'})
export class WeeklyScheduler {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Number, default: 0})
  1: number;

  @Prop({type: Number, default: 0})
  2: number;

  @Prop({type: Number, default: 0})
  3: number;

  @Prop({type: Number, default: 0})
  4: number;

  @Prop({type: Number, default: 0})
  5: number;

  @Prop({type: Number, default: 0})
  6: number;

  @Prop({type: Number, default: 0})
  7: number;

  @Prop({type: Number, default: 0})
  totalHours: number;

}

export const weeklySchedulerSchema = SchemaFactory.createForClass(WeeklyScheduler);
