import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'PaymentType'})
export class PaymentType {
  @Prop()
  name: string;

}

export const paymentTypeSchema = SchemaFactory.createForClass(PaymentType);
