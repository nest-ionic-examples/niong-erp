import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

'use strict';


@Schema({collection: 'rates'})
export class Rate {
  @Prop({type: String, default: ''})
  _id: string;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: String, default: 'USD', ref: 'currency'})
  base: string;

  @Prop({type: JSON})
  rates: JSON;

}

export const RateSchema = SchemaFactory.createForClass(Rate);
