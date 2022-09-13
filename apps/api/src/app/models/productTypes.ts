import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'productTypes'})
export class ProductTypes {
  @Prop()
  name: string;

  @Prop({type: Array, default: []})
  options: [];

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const productTypesSchema = SchemaFactory.createForClass(ProductTypes);
