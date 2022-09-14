import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Quotation } from './quotation';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Order', discriminatorKey: '_type'})
export class Order {
  @Prop({
    type: {
      _id: {type: String, ref: 'currency', default: ''},
      rate: {type: Number, default: 1} // changed default to '0' for catching errors
    }
  })
  currency: {
    _id: string,
    rate: number
  };

  @Prop({type: Boolean, default: true})
  forSales: boolean;

  @Prop({type: String, default: 'Not Ordered', enum: ['Not Ordered', 'Not Invoiced', 'Invoiced']})
  type: string;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  supplier: ObjectID;

  @Prop({type: Date, default: Date.now})
  orderDate: Date;

  @Prop({type: Date, default: Date.now})
  expectedDate: Date;

  @Prop({type: String, default: ''})
  integrationId: string;

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

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: ObjectID;

  @Prop({type: String, default: 'SO', unique: true})
  name: string;

  @Prop({type: ObjectId, ref: 'Destination', default: null})
  destination: ObjectID;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerm: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  salesPerson: ObjectID;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  costList: ObjectID;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  priceList: ObjectID;

  @Prop({
    type: {
      _id: false,
      id: false,
      total: {type: Number, default: 0},
      discount: {type: Number, default: 0},
      unTaxed: {type: Number, default: 0},
      taxes: {type: Number, default: 0}
    }
  })
  paymentInfo: {
    _id: false,
    id: false,
    total: number,
    discount: number,
    unTaxed: number,
    taxes: number
  };

  @Prop({type: ObjectId, ref: 'shippingMethod', default: null})
  shippingMethod: ObjectID;

  @Prop({
    type: {
      amount: {type: Number, default: 0},
      account: {type: ObjectId, ref: 'chartOfAccount', default: null}
    }
  })
  shippingExpenses: {
    amount: number,
    account: ObjectID
  };

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  tempWorkflow: ObjectID;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({
    type: {
      owner: {type: ObjectId, ref: 'Users', default: null},
      users: [{type: ObjectId, ref: 'Users', default: null}],
      group: [{type: ObjectId, ref: 'Department', default: null}]
    }
  })
  groups: {
    owner: ObjectID,
    users: ObjectID[],
    group: ObjectID[]
  };

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop()
  externalId: string;

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop([{
    _id: false,
    type: {type: String},
    value: {type: JSON}
  }])
  conflictTypes: { type: string }[];

}

export const baseSchema = SchemaFactory.createForClass(Order);


export const purchaseOrdersSchema = SchemaFactory.createForClass(Order);
export const orderSchema = SchemaFactory.createForClass(Order);


function setName(this: Document & Quotation, next) {
  const db = this.db.db;
  const prefix = this.forSales ? 'SO' : 'PO';

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: prefix
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, function (err, rate) {
    if (err) {
      return next(err);
    }

    this.name = prefix + '_' + rate.value.seq;

    next();
  });
}

orderSchema.pre('save', setName);
purchaseOrdersSchema.pre('save', setName);
