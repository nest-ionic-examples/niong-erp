import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


function setPrice(num) {
  return num * 100;
}

@Schema({collection: 'wTrack'})
export class WTrack {
  @Prop()
  ID: number;

  @Prop()
  dateByWeek: number;

  @Prop()
  dateByMonth: number;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  employee: ObjectID;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: ObjectID;

  @Prop()
  year: number;

  @Prop()
  isoYear: number;

  @Prop()
  month: number;

  @Prop()
  week: number;

  @Prop({type: Number, default: 0})
  1: number;

  @Prop({type: Number, default: 0})
  2: number;

  @Prop({type: Number, default: 0})
  3: number;

  @Prop({type: Number, default: 0})
  4: number;

  @Prop({type: Number, default: 0})
  5: number;

  @Prop({type: Number, default: 0})
  6: number;

  @Prop({type: Number, default: 0})
  7: number;

  @Prop()
  worked: number;

  @Prop()
  rate: number;

  @Prop({type: String, default: 'ordinary'})
  _type: string;

  @Prop({type: Number, /* get: getPrice,*/ set: setPrice, default: 0})
  revenue: number;

  @Prop({type: Number, /* get: getPrice,*/ set: setPrice, default: 0})
  oldRevenue: number;

  @Prop({type: Number, /* get: getPrice,*/ set: setPrice, default: 0})
  cost: number;

  @Prop({type: Number, /* get: getPrice,*/ set: setPrice, default: 0})
  amount: number;

  @Prop({type: Boolean, default: false})
  isPaid: boolean;

  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: ObjectID;

  @Prop({
    productType: {type: String, ref: 'productTypes', default: 'wTrack'},
    salePrice: {type: Number, default: 100, set: setPrice}
  })
  info: {
    productType: string,
    salePrice: number
  };

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

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
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: ObjectId, ref: 'jobs', default: null})
  jobs: ObjectID;

}

export const wTrackSchema = SchemaFactory.createForClass(WTrack);


/* function getPrice(num) {
 return (num / 100).toFixed(2);
 }*/

wTrackSchema.set('toJSON', {getters: true});
