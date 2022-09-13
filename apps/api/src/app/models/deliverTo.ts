import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'deliverTo'})
export class DeliverTo {
  @Prop()
  code: string;

  @Prop()
  name: string;

}

export const DeliverToSchema = SchemaFactory.createForClass(DeliverTo);
