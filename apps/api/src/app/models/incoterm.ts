import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Incoterms'})
export class Incoterm {
  @Prop()
  code: string;

  @Prop()
  name: string;

}

export const IncotermSchema = SchemaFactory.createForClass(Incoterm);
