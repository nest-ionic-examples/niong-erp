import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Degrees'})
export class Degree {
  @Prop({type: String, default: ''})
  _id: string;

  @Prop({type: String, default: ''})
  name: string;

}

export const degreeSchema = SchemaFactory.createForClass(Degree);
