import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Customer } from './customer';
import { Project } from './project';
import { DeliverTo } from './deliver-to';
import { Destination } from './destination';
import { Incoterm } from './incoterm';
import { InvoicingControl } from './invoicing-control';
import { PaymentTerm } from './payment-term';
import { Workflow } from './workflow';
import { Product } from './product';
import { Job } from './job';
import { User } from './user';
import { Department } from './department';

'use strict';


@Schema({collection: 'Quotation'})
export class Quotation {
  @Prop({
    type: {
      _id: {type: String, ref: 'Currency', default: null},
      rate: {type: Number, default: 0} // changed default to '0' for catching errors
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

  @Prop({type: Boolean, default: false})
  isOrder: boolean;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  supplier: string | ObjectID | Customer;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: string | ObjectID | Project;

  @Prop({type: ObjectId, ref: 'DeliverTo', default: null})
  deliverTo: string | ObjectID | DeliverTo;

  @Prop({type: Date, default: Date.now})
  orderDate: Date;

  @Prop({type: Date, default: Date.now})
  expectedDate: Date;

  @Prop({type: String, default: 'PO', unique: true})
  name: string;

  @Prop({type: ObjectId, ref: 'Destination', default: null})
  destination: string | ObjectID | Destination;

  @Prop({type: ObjectId, ref: 'Incoterm', default: null})
  incoterm: string | ObjectID | Incoterm;

  @Prop({type: ObjectId, ref: 'InvoicingControl', default: null})
  invoiceControl: string | ObjectID | InvoicingControl;

  @Prop({type: Boolean, default: false})
  invoiceRecived: boolean;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerm: string | ObjectID | PaymentTerm;

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

  @Prop([{
    _id: false,
    id: false,
    scheduledDate: {type: Date},
    quantity: {type: Number, default: 1},
    taxes: {type: Number, default: 0},
    subTotal: {type: Number, default: 0},
    unitPrice: {type: Number, default: 0},
    product: {type: ObjectId, ref: 'Product', default: null},
    description: {type: String, default: ''},
    jobs: {type: ObjectId, ref: 'Job', default: null}
  }])
  products: {
    _id: false,
    id: false,
    scheduledDate: Date,
    quantity: number,
    taxes: number,
    subTotal: number,
    unitPrice: number,
    product: string | ObjectID | Product,
    description: string,
    jobs: string | ObjectID | Job
  }[];

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

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
    group: string | ObjectID | Department[]
  };

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

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

  @Prop({type: Number, default: 0})
  proformaCounter: number;

  @Prop({type: String, default: null})
  externalId: string;

}

export const quotationSchema = SchemaFactory.createForClass(Quotation);


quotationSchema.pre('save', function (this: Document & Quotation, next) {
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
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    // quotation.name = 'PO' + rate.seq; //it was working before mongoose and mongo update
    this.name = prefix + '_' + rate.value.seq;

    next();
  });
});
