import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'birthdays'})
export class Birthdays {
  @Prop({type: Number, default: 1})
  _id: number;

  @Prop()
  date: Date;

  @Prop({
    weekly: Array,
    nextweek: Array,
    monthly: Array
  })
  currentEmployees: {
    weekly: [],
    nextweek: [],
    monthly: []
  };
}

export const birthdaysSchema = SchemaFactory.createForClass(Birthdays);
