import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'CurrencyStore'})
export class Currency {
  @Prop()
  data: [];

  @Prop()
  date: Date;

}

export const currencySchema = SchemaFactory.createForClass(Currency);
