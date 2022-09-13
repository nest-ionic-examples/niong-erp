import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'nationality'})
export class Nationality {
  @Prop({type: String, required: true})
  name: string;

}

export const nationalitySchema = SchemaFactory.createForClass(Nationality);
