import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'Brand'})
export class Brand {
  @Prop({type: String, default: 'default'})
  name: string;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
