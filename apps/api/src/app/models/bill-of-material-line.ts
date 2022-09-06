import { ObjectId } from 'bson';
import { Prop } from '@nestjs/mongoose';

export class BillOfMaterialLine {
  @Prop({ref: 'Product', default: null})
  component: ObjectId;

  @Prop({default: 0})
  quantity: number;

  @Prop({default: ''})
  info: string;
}
