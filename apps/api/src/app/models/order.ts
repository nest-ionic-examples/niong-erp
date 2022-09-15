import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Quotation } from './quotation';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Customer } from './customer';
import { PackageMetadata } from '@angular/cli/src/utilities/package-metadata';
import { Destination } from './destination';
import { PaymentTerm } from './payment-term';
import { Employee } from './employee';
import { PriceList } from './price-list';
import { ChartOfAccount } from './chart-of-account';
import { ShippingMethod } from './shipping-method';
import { Workflow } from './workflow';
import { Warehouse } from './warehouse';
import { User } from './user';
import { Department } from './department';
import { Project } from './project';
import { Integration } from './integration';

@Schema({collection: 'Order', discriminatorKey: '_type'})
export class Order {
  @Prop({
    type: {
      _id: {type: String, ref: 'Currency', default: ''},
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

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  supplier: string | ObjectID | Customer;

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
  paymentMethod: string | ObjectID | PackageMetadata;

  @Prop({type: String, default: 'SO', unique: true})
  name: string;

  @Prop({type: ObjectId, ref: 'Destination', default: null})
  destination: string | ObjectID | Destination;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerm: string | ObjectID | PaymentTerm;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  salesPerson: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  costList: string | ObjectID | PriceList;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  priceList: string | ObjectID | PriceList;

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

  @Prop({type: ObjectId, ref: 'ShippingMethod', default: null})
  shippingMethod: string | ObjectID | ShippingMethod;

  @Prop({
    type: {
      amount: {type: Number, default: 0},
      account: {type: ObjectId, ref: 'ChartOfAccount', default: null}
    }
  })
  shippingExpenses: {
    amount: number,
    account: string | ObjectID | ChartOfAccount
  };

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  tempWorkflow: string | ObjectID | Workflow;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({type: Array, default: []})
  notes: [];

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
    group: (string | ObjectID | Department)[]
  };

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: string | ObjectID | Project;

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

  @Prop()
  externalId: string;

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: string | ObjectID | Integration;

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
