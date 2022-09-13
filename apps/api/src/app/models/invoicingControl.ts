import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'invoiceControl'})
export class InvoicingControl {
  @Prop()
  name: string;

}

export const InvoicingControlSchema = SchemaFactory.createForClass(InvoicingControl);
