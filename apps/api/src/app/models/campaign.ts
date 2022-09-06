import { ObjectId } from 'bson';
import { Prop } from '@nestjs/mongoose';

export class Campaign {
  _id: string | ObjectId;

  @Prop({default: ''})
  name: string;

  @Prop({default: 0})
  sequence: number;
}
