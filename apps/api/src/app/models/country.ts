import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'countries'})
export class Country {
  @Prop({type: String, default: ''})
  _id: string;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  code: string;

}

export const countriesSchema = SchemaFactory.createForClass(Country);
