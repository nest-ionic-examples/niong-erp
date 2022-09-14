import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

'use strict';


@Schema({collection: 'Quotation'})
export class Quotation {
  @Prop({
    type: {
      _id: {type: String, ref: 'currency', default: null},
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

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  supplier: ObjectID;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({type: ObjectId, ref: 'DeliverTo', default: null})
  deliverTo: ObjectID;

  @Prop({type: Date, default: Date.now})
  orderDate: Date;

  @Prop({type: Date, default: Date.now})
  expectedDate: Date;

  @Prop({type: String, default: 'PO', unique: true})
  name: string;

  @Prop({type: ObjectId, ref: 'Destination', default: null})
  destination: ObjectID;

  @Prop({type: ObjectId, ref: 'Incoterm', default: null})
  incoterm: ObjectID;

  @Prop({type: ObjectId, ref: 'InvoicingControl', default: null})
  invoiceControl: ObjectID;

  @Prop({type: Boolean, default: false})
  invoiceRecived: boolean;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerm: ObjectID;

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
    jobs: {type: ObjectId, ref: 'jobs', default: null}
  }])
  products: {
    _id: false,
    id: false,
    scheduledDate: Date,
    quantity: number,
    taxes: number,
    subTotal: number,
    unitPrice: number,
    product: ObjectID,
    description: string,
    jobs: ObjectID
  }[];

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

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
