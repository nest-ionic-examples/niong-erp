import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'birthdays'})
export class Birthday {
  @Prop({type: Number, default: 1})
  _id: number;

  @Prop()
  date: Date;

  @Prop({
    type: {
      weekly: Array,
      nextweek: Array,
      monthly: Array
    }
  })
  currentEmployees: {
    weekly: [],
    nextweek: [],
    monthly: []
  };
}

export const birthdaysSchema = SchemaFactory.createForClass(Birthday);
