import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'currency'})
export class Currency {
  @Prop({type: 'String'})
  _id: 'String';

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  symbol: string;

  @Prop({type: Number, default: 2})
  decPlace: number;

  @Prop({type: Number})
  sequence: number;

  @Prop({type: Boolean, default: false})
  active: boolean;

}

export const currencySchema = SchemaFactory.createForClass(Currency);
