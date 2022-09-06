import { ObjectId } from 'bson';
import { Prop } from '@nestjs/mongoose';

export class ActionBy {
  @Prop({ref: 'Users', default: null})
  user: ObjectId;

  @Prop({default: Date.now})
  date: Date;
}
