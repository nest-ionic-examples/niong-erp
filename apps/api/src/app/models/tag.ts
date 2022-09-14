import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'tags'})
export class Tag {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop()
  type: string;

}

export const tagSchema = SchemaFactory.createForClass(Tag);
