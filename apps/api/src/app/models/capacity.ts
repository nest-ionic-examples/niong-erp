import { Prop, Schema } from '@nestjs/mongoose';

import mongoose from 'mongoose';
import Types = mongoose.Schema.Types;
import { ObjectId } from 'bson';

@Schema({collection: 'Capacity'})
export class Capacity {
  @Prop()
  ID: number;

  @Prop({
    _id: {type: Types.ObjectId, ref: 'Employees', default: null},
    name: String
  })
  employee: {
    _id: string | ObjectId,
    name: string
  }

  @Prop({
    _id: { type: Types.ObjectId, ref: 'Department', default: null },
    name: String
  })
  department: {
    _id: string | ObjectId,
    name: string
  };

  @Prop({ type: Types.ObjectId, ref: 'Vacation', default: null })
  vacation: string | ObjectId;

  @Prop()
  month: number;

  @Prop()
  year: number;

  @Prop()
  capacityArray: [];

  @Prop()
  capacityMonthTotal: number;
}
