import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { BillOfMaterial } from './bill-of-material';
import { Employee } from './employee';
import { Product } from './product';
import { Routing } from './routing';
import { Warehouse } from './warehouse';
import { Workflow } from './workflow';
import { User } from './user';

@Schema({collection: 'manufacturingOrder'})
export class ManufacturingOrder {
  @Prop({type: ObjectId, ref: 'ManufacturingOrder', default: null})
  source: string | ObjectID | ManufacturingOrder;

  @Prop({type: ObjectId, ref: 'BillOfMaterial', default: null})
  billOfMaterial: string | ObjectID | BillOfMaterial;

  @Prop({type: String, enum: ['1', '2', '3'], default: '1'})
  availability: string;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  responsible: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: string | ObjectID | Product;

  @Prop({type: ObjectId, ref: 'Routing', default: null})
  routing: string | ObjectID | Routing;

  @Prop({type: Number, default: 0})
  quantity: number;

  @Prop({type: Date, default: Date.now})
  deadlineStart: Date;

  @Prop({type: String, unique: true, default: 'MO'})
  name: string;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouseTo: string | ObjectID | Warehouse;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

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
      allocateStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']},
      fulfillStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']},
      shippingStatus: {type: String, default: 'NOR', enum: ['NOR', 'NOT', 'NOA', 'ALL']}
    }
  })
  status: {
    allocateStatus: string,
    fulfillStatus: string,
    shippingStatus: string
  };

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date, default: Date.now}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

}

export const manufacturingOrderSchema = SchemaFactory.createForClass(ManufacturingOrder);


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

manufacturingOrderSchema.pre('save', setName);
