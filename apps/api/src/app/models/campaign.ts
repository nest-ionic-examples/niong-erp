import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'campaign'})
export class Campaign {
  @Prop({type: String, default: ''})
  _id: string;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Number, default: 0})
  sequence: number;
}

export const campaignSchema = SchemaFactory.createForClass(Campaign);
