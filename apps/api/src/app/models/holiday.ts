import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Holiday'})
export class Holiday {
  @Prop()
  ID: number;

  @Prop()
  date: Date;

  @Prop()
  year: number;

  @Prop()
  week: number;

  @Prop()
  day: number;

  @Prop()
  dateByMonth: number;

  @Prop()
  comment: string;

}

export const holidaySchema = SchemaFactory.createForClass(Holiday);
