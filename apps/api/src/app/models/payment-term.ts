import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'paymentTerms'})
export class PaymentTerm {
  @Prop()
  name: string;

  @Prop()
  count: number;

}

export const paymentTermSchema = SchemaFactory.createForClass(PaymentTerm);
