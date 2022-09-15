import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { ProductOption } from './product-option';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'ProductOptionsValues'})
export class ProductOptionValue {
  @Prop({type: String, default: 'default'})
  value: string;

  @Prop({type: ObjectId, ref: 'ProductOption', default: null})
  optionId: string | ObjectID | ProductOption;

}

export const productOptionValueSchema = SchemaFactory.createForClass(ProductOptionValue);
