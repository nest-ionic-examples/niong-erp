import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'relatedStatus'})
export class RelatedStatus {
  @Prop()
  _id: number;

  @Prop()
  status: string;

}

export const relatedStatusSchema = SchemaFactory.createForClass(RelatedStatus);
