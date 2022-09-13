import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'HoursCashes'})
export class HoursCash {
  @Prop({type: String, default: ''})
  dateField: string;

  @Prop()
  result: JSON;

}

export const hoursCashSchema = SchemaFactory.createForClass(HoursCash);
