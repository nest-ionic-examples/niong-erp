import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Vacation'})
export class Vacation {
  @Prop()
  ID: number;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  employee: ObjectID;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: ObjectID;

  @Prop({type: Object})
  vacations: object;

  @Prop()
  month: number;

  @Prop()
  year: number;

  @Prop()
  vacArray: [];

  @Prop()
  monthTotal: number;

  @Prop()
  dateByMonth: number;

}

export const vacationSchema = SchemaFactory.createForClass(Vacation);


vacationSchema.set('toJSON', {virtuals: true});
