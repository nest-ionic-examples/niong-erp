import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'tags'})
export class Tags {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop()
  type: string;

}

export const tagsSchema = SchemaFactory.createForClass(Tags);
