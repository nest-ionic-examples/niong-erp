import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'scheduledPays'})
export class ScheduledPay {
  @Prop({type: String, default: ''})
  name: string;

}

export const scheduledPaySchema = SchemaFactory.createForClass(ScheduledPay);
