import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Salary'})
export class Salary {
  @Prop()
  ID: number;

  @Prop({
    type: {
      _id: {type: ObjectId, ref: 'Employees', default: null},
      name: String
    }
  })
  employee: {
    _id: ObjectID,
    name: string
  };

  @Prop()
  year: number;

  @Prop()
  month: number;

  @Prop()
  baseSalary: number;

  @Prop({
    type: {
      salary: Number,
      onCash: Number,
      onCard: Number
    }
  })
  calc: {
    salary: number,
    onCash: number,
    onCard: number
  };

  @Prop({
    type: {
      onCash: Number,
      onCard: Number
    }
  })
  paid: {
    onCash: number,
    onCard: number
  };

  @Prop({
    type: {
      onCash: Number,
      onCard: Number,
      total: Number
    }
  })
  diff: {
    onCash: number,
    onCard: number,
    total: number
  };

}

export const salarySchema = SchemaFactory.createForClass(Salary);


salarySchema.set('toJSON', {virtuals: true});
