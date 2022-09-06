import { ObjectId } from 'bson';
import { Prop } from '@nestjs/mongoose';

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
