import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'projectPositions'})
export class ProjectPosition {
  @Prop({type: String, default: ''})
  name: string;

}

export const projectPositionSchema = SchemaFactory.createForClass(ProjectPosition);
