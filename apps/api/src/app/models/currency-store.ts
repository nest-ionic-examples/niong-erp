import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'CurrencyStore'})
export class CurrencyStore {
  @Prop()
  data: [];

  @Prop()
  date: Date;

}

export const currencyStoreSchema = SchemaFactory.createForClass(CurrencyStore);
