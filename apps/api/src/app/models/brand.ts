import { ObjectId } from 'bson';
import { Prop } from '@nestjs/mongoose';

export class Brand {
  _id: string | ObjectId;

  @Prop({default: 'default'})
  name: string;

  @Prop({default: Date.now})
  creationDate: Date;
}
