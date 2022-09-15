import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Currency } from './currency';

@Schema({collection: 'PriceLists'})
export class PriceList {
  @Prop({type: String, default: null})
  priceListCode: string;

  @Prop({type: String, default: null})
  name: string;

  @Prop({type: String, ref: 'Currency', default: null})
  currency: string | Currency;

  @Prop({type: Boolean, default: false})
  cost: boolean;

}

export const priceListSchema = SchemaFactory.createForClass(PriceList);
