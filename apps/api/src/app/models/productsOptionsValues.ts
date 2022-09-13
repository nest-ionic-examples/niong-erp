import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'ProductOptionsValues'})
export class OptionsValues {
  @Prop({type: String, default: 'default'})
  value: string;

  @Prop({type: ObjectId, ref: 'productsOptions', default: null})
  optionId: ObjectID;

}

export const OptionsValuesSchema = SchemaFactory.createForClass(OptionsValues);
