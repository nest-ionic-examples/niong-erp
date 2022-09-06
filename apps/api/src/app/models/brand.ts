import { ObjectId } from 'bson';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({collection: 'Brand'})
export class Brand {
  _id: string | ObjectId;

  @Prop({default: 'default'})
  name: string;

  @Prop({default: Date.now})
  creationDate: Date;
}
