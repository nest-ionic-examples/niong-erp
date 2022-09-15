import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Employee } from './employee';
import { Vacation } from './vacation';
import { Department } from './department';

@Schema({collection: 'Capacity'})
export class Capacity {
  @Prop()
  ID: number;

  @Prop({
    type: {
      _id: {type: ObjectId, ref: 'Employee', default: null},
      name: String
    }
  })
  employee: {
    _id: string | ObjectID | Employee,
    name: string
  };

  @Prop({
    type: {
      _id: {type: ObjectId, ref: 'Department', default: null},
      name: String
    }
  })
  department: {
    _id: string | ObjectID | Department,
    name: string
  };

  @Prop({type: ObjectId, ref: 'Vacation', default: null})
  vacation: string | ObjectID | Vacation;

  @Prop()
  month: number;

  @Prop()
  year: number;

  @Prop()
  capacityArray: [];

  @Prop()
  capacityMonthTotal: number;
}

export const capacitySchema = SchemaFactory.createForClass(Capacity);


capacitySchema.set('toJSON', {virtuals: true});
