import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Priority'})
export class Priority {
  @Prop()
  _id: string;

  @Prop()
  priority: string;

  @Prop()
  type: string;

}

export const prioritySchema = SchemaFactory.createForClass(Priority);







