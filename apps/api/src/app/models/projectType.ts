import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'projectType'})
export class ProjectType {
  @Prop()
  _id: string;

  @Prop()
  name: string;

}

export const projectTypeSchema = SchemaFactory.createForClass(ProjectType);
