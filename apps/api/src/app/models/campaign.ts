import { ObjectId } from 'bson';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({collection: 'campaign'})
export class Campaign {
  _id: string | ObjectId;

  @Prop({default: ''})
  name: string;

  @Prop({default: 0})
  sequence: number;
}
