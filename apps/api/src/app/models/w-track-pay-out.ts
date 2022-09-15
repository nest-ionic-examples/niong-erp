import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';
import { Department } from './department';
import { Employee } from './employee';


function setPrice(num) {
  return num * 100;
}

@Schema({collection: 'Payment'})
export class WTrackPayOut {
  @Prop()
  ID: number;

  @Prop({type: Boolean, default: false})
  forSale: boolean;

  @Prop({
    type: {
      _id: {type: ObjectId, ref: 'Employee', default: null},
      fullName: String
    }
  })
  supplier: {
    _id: string | ObjectID | Employee,
    fullName: string
  };

  @Prop({type: Number, default: 0, set: setPrice})
  paidAmount: number;

  @Prop({type: String, default: '', unique: true})
  name: string;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: String, default: ''})
  paymentRef: string;

  @Prop({type: String, enum: ['Draft', 'Paid'], default: 'Draft'})
  workflow: string;

  @Prop({type: Number, default: 0, set: setPrice})
  differenceAmount: number;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({type: Number})
  month: number;

  @Prop({type: Number})
  year: number;

  @Prop({type: Boolean, default: true})
  bonus: boolean;

  @Prop({
    type: {
      owner: {type: ObjectId, ref: 'User', default: null},
      users: [{type: ObjectId, ref: 'User', default: null}],
      group: [{type: ObjectId, ref: 'Department', default: null}]
    }
  })
  groups: {
    owner: string | ObjectID | User,
    users: (string | ObjectID | User)[],
    group: string | ObjectID | Department[]
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

}

export const wTrackPayOutSchema = SchemaFactory.createForClass(WTrackPayOut);


wTrackPayOutSchema.pre('save', function (next) {
  const payment = this as WTrackPayOut;

  payment.name = new Date().valueOf().toString();
  next();
});
