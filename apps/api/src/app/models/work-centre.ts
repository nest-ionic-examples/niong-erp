import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'workCentres'})
export class WorkCentre {
  @Prop({type: String, required: true})
  name: string;

  @Prop({type: String, default: ''})
  description: string;

  @Prop({type: Number, default: 0})
  costPerHour: number;

  @Prop({type: String, default: ''})
  code: string;

}

export const workCentreSchema = SchemaFactory.createForClass(WorkCentre);
