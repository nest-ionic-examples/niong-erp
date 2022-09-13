import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'manufacturingOrder'})
export class ManufacturingOrder {
  @Prop({type: ObjectId, ref: 'manufacturingOrder', default: null})
  source: ObjectID;

  @Prop({type: ObjectId, ref: 'billOfMaterials', default: null})
  billOfMaterial: ObjectID;

  @Prop({type: String, enum: ['1', '2', '3'], default: '1'})
  availability: string;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  responsible: ObjectID;

  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop({type: ObjectId, ref: 'routing', default: null})
  routing: ObjectID;

  @Prop({type: Number, default: 0})
  quantity: number;

  @Prop({type: Date, default: Date.now})
  deadlineStart: Date;

  @Prop({type: String, unique: true, default: 'MO'})
  name: string;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouseTo: ObjectID;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    allocateStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']},
    fulfillStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']},
    shippingStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']}
  })
  status: {
    allocateStatus: string,
    fulfillStatus: string,
    shippingStatus: string
  };

  @Prop({
    user: {
      type: ObjectId,
      ref: 'Users', default: null
    },

    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

}

export const ManufacturingOrderSchema = SchemaFactory.createForClass(ManufacturingOrder);


function setName(this: Document & ManufacturingOrder, next) {
  const db = this.db.db;
  const prefix = 'MO';

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: prefix
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }

    this.name = prefix + '_' + rate.value.seq;

    next();
  });
}

ManufacturingOrderSchema.pre('save', setName);
