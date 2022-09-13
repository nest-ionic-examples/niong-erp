import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Period'})
export class Period {
  @Prop()
  _id: string;

  @Prop()
  neme: string;

}

export const periodSchema = SchemaFactory.createForClass(Period);
