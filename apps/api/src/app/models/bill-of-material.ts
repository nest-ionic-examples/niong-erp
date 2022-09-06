import { ObjectId } from 'bson';
import { BillOfMaterialLine } from './bill-of-material-line';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'billsOfMaterials'})
export class BillOfMaterial {
  _id: string | ObjectId;

  @Prop({unique: true, default: 'BM'})
  name: string;

  @Prop({ref: 'Product', default: null})
  product: ObjectId;

  @Prop({ref: 'routing', default: null})
  routing: ObjectId;

  @Prop({default: false})
  isComponent: boolean;

  @Prop({default: 0})
  quantity: number;

  @Prop({default: ''})
  description: string;

  @Prop({type: [{
      component: {type: ObjectId, ref: 'Product', default: null},
      quantity : {type: Number, default: 0},
      info     : {type: String, default: ''}
    }]})
  components: BillOfMaterialLine[];

  @Prop({default: Date.now})
  creationDate: Date;

}

export const BillOfMaterialSchema = SchemaFactory.createForClass(BillOfMaterial);
