import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


function setPrice(num) {
  return num * 100;
}

@Schema({collection: 'Payment'})
export class Payment {
  @Prop()
  ID: number;

  @Prop({type: Boolean, default: false})
  forSale: boolean;

  @Prop({
    _id: {type: ObjectId, ref: 'Employees', default: null},
    fullName: String
  })
  supplier: {
    _id: ObjectID,
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
    owner: {type: ObjectId, ref: 'Users', default: null},
    users: [{type: ObjectId, ref: 'Users', default: null}],
    group: [{type: ObjectId, ref: 'Department', default: null}]
  })
  groups: {
    owner: ObjectID,
    users: ObjectID[],
    group: ObjectID[]
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

}

export const paymentSchema = SchemaFactory.createForClass(Payment);


paymentSchema.pre('save', function (next) {
  const payment = this as Payment;

  payment.name = new Date().valueOf().toString();
  next();
});
