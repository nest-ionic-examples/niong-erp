import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Employee } from './employee';


@Schema({collection: 'SalaryCash'})
export class SalaryCash {
  @Prop()
  dataKey: string;

  @Prop()
  month: number;

  @Prop()
  year: number;

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

  @Prop([{
    ID: Number,

    employee: {
      _id: {type: ObjectId, ref: 'Employee', default: null},
      name: String
    },

    baseSalary: Number,

    calc: {
      salary: Number,
      onCash: Number,
      onCard: Number
    },

    paid: {
      onCash: Number,
      onCard: Number
    },

    diff: {
      onCash: Number,
      onCard: Number,
      total: Number
    }
  }])
  employeesArray: {
    ID: number,
    employee: {
      _id: string | ObjectID | Employee,
      name: string
    },
    baseSalary: number,
    calc: {
      salary: number,
      onCash: number,
      onCard: number
    },
    paid: {
      onCash: number,
      onCard: number
    },
    diff: {
      onCash: number,
      onCard: number,
      total: number
    }
  }[];

}

export const salaryCashSchema = SchemaFactory.createForClass(SalaryCash);
