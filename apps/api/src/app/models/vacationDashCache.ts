import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'vacationCache'})
export class VacationCache {
  @Prop({type: Number, default: 1})
  _id: number;

  @Prop()
  data: JSON;

}

export const vacationCacheSchema = SchemaFactory.createForClass(VacationCache);
