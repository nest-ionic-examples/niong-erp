import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'companyIndustry'})
export class Industry {
  @Prop()
  name: string;

  @Prop()
  ID: number;

}

export const IndustrySchema = SchemaFactory.createForClass(Industry);
