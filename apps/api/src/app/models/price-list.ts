import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'PriceLists'})
export class PriceList {
  @Prop({type: String, default: null})
  priceListCode: string;

  @Prop({type: 'String', default: null})
  name: 'String';

  @Prop({type: String, ref: 'currency', default: null})
  currency: string;

  @Prop({type: Boolean, default: false})
  cost: boolean;

}

export const priceListSchema = SchemaFactory.createForClass(PriceList);
