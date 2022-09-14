import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'sources'})
export class Source {
  @Prop()
  _id: string;

  @Prop()
  name: string;

}

export const sourceSchema = SchemaFactory.createForClass(Source);
