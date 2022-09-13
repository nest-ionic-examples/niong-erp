import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Degrees'})
export class Degrees {
  @Prop({type: String, default: ''})
  _id: string;

  @Prop({type: String, default: ''})
  name: string;

}

export const degreesSchema = SchemaFactory.createForClass(Degrees);
