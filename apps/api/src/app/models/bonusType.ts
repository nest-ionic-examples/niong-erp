import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'bonusType'})
export class BonusType {
  @Prop()
  ID: number;

  @Prop({type: String})
  name: string;

  @Prop({type: String, enum: ['HR', 'Sales', 'Developer', 'PM'], default: 'Developer'})
  bonusType: string;

  @Prop({type: Number})
  value: number;

  @Prop({type: Boolean})
  isPercent: boolean;
}

export const bonusTypeSchema = SchemaFactory.createForClass(BonusType);
