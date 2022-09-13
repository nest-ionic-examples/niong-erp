import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'jobType'})
export class JobType {
  @Prop()
  _id: string;

  @Prop()
  neme: string;

}

export const jobTypeSchema = SchemaFactory.createForClass(JobType);
