import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'ProductOptions'})
export class ProductOption {
  @Prop({type: String, default: 'default'})
  name: string;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const productOptionSchema = SchemaFactory.createForClass(ProductOption);
