import { ObjectId } from 'bson';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({collection: 'birthdays'})
export class Birthday {
  _id: string | ObjectId;

  @Prop()
  date: Date;

  @Prop()
  currentEmployees: {
    weekly: [],
    nextweek: [],
    monthly: []
  };
}
