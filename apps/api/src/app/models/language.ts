import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'languages'})
export class Language {
  @Prop({type: String, required: true})
  name: string;

}

export const languageSchema = SchemaFactory.createForClass(Language);
