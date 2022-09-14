import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'taxes'})
export class Tax {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  fullName: string;

  @Prop({type: String, default: ''})
  code: string;

  @Prop({type: Number, default: 0})
  rate: number;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: String, default: 0})
  country: string;

  @Prop({type: Boolean, default: false})
  isDefault: boolean;

}

export const taxSchema = SchemaFactory.createForClass(Tax);
