import { ObjectId } from 'bson';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class BonusType {
  _id: string | ObjectId;

  @Prop()
  name: string;

  @Prop({enum: ['HR', 'Sales', 'Developer', 'PM'], default: 'Developer'})
  bonusType: string;

  @Prop()
  value: number;

  @Prop()
  isPercent: boolean;
}

export const BonusTypeSchema = SchemaFactory.createForClass(BonusType);
