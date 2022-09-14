import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'HoursCashes'})
export class HoursCash {
  @Prop({type: String, default: ''})
  dateField: string;

  @Prop({type: JSON})
  result: object;

}

export const hoursCashSchema = SchemaFactory.createForClass(HoursCash);
