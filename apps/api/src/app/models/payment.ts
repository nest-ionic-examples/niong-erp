import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Invoice } from './invoice';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';
import { Department } from './department';
import { ChartOfAccount } from './chart-of-account';
import { Integration } from './integration';
import { Customer } from './customer';
import { PaymentMethod } from './payment-method';
import { Destination } from './destination';
import { Order } from './order';
import { ProductCategory } from './product-category';
import { PayRoll } from './pay-roll';
import { Employee } from './employee';


function setPrice(num) {
  return num * 100;
}

@Schema({collection: 'Payment', discriminatorKey: '_type'})
export class BasePayment {
  @Prop()
  ID: number;

  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: string | ObjectID | Invoice;

  @Prop({type: Number, default: 0, set: setPrice})
  paidAmount: number;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: String, default: '', unique: true})
  name: string;

  @Prop({type: String, enum: ['Draft', 'Paid'], default: 'Paid'})
  workflow: string;

  @Prop({type: Number, default: 0, set: setPrice})
  differenceAmount: number;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({type: Number})
  month: number;

  @Prop({type: Number})
  year: number;

  @Prop({
    type: {
      _id: {type: String, ref: 'Currency', default: ''},
      rate: {type: Number, default: 1}
    }
  })
  currency: {
    _id: string,
    rate: number
  };

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

  @Prop({type: ObjectId, ref: 'journal', default: null})
  journal: ObjectID;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  otherIncomeLossAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  bankAccount: ObjectID;

  @Prop({
    type: {
      amount: {type: Number, default: 0, set: setPrice},
      account: {type: ObjectId, ref: 'ChartOfAccount', default: null}
    }
  })
  bankExpenses: {
    amount: number,
    account: ObjectID
  };

  @Prop({
    type: {
      amount: {type: Number, default: 0, set: setPrice},
      account: {type: ObjectId, ref: 'ChartOfAccount', default: null}
    }
  })
  overPayment: {
    amount: number,
    account: string | ObjectID | ChartOfAccount
  };

  @Prop({
    type: {
      amount: {type: Number, default: 0, set: setPrice},
      account: {type: ObjectId, ref: 'ChartOfAccount', default: null}
    }
  })
  otherIncomeLoss: {
    amount: number,
    account: string | ObjectID | ChartOfAccount
  };

  @Prop({type: ObjectId, default: null, ref: 'Integration'})
  channel: string | ObjectID | Integration;

  @Prop({type: String, default: ''})
  integrationId: string;

}

export const basePaymentSchema = SchemaFactory.createForClass(BasePayment);


@Schema()
export class Payment extends BasePayment {
  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: string | ObjectID | Invoice;

  @Prop({type: Boolean, default: true})
  forSale: boolean;

  @Prop({type: String, default: ''})
  paymentRef: string;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  supplier: string | ObjectID | Customer;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: string | ObjectID | PaymentMethod;

  @Prop({type: ObjectId, ref: 'Destination', default: null})
  period: string | ObjectID | Destination;

  @Prop({type: Boolean})
  bonus: boolean;

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: string | ObjectID | Order;

  @Prop({
    type: {
      _id: {type: String, ref: 'Currency', default: null},
      rate: {type: Number, default: 1}
    }
  })
  currency: {
    _id: string,
    rate: number
  };

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: ObjectID;

  @Prop({type: String, default: null})
  integrationId: string;

  @Prop({type: Boolean, default: false})
  refund: boolean;

  @Prop({type: ObjectId, ref: 'Payment', default: null})
  refundId: string | ObjectID | Payment;

}

export const paymentSchema = SchemaFactory.createForClass(Payment);


@Schema()
export class InvoicePayment extends Payment {}

export const InvoicePaymentSchema = SchemaFactory.createForClass(InvoicePayment);


@Schema()
export class ProformaPayment extends Payment {}

export const ProformaPaymentSchema = SchemaFactory.createForClass(ProformaPayment);


@Schema()
export class ExpensesInvoicePayment extends Payment {}

export const ExpensesInvoicePaymentSchema = SchemaFactory.createForClass(ExpensesInvoicePayment);


@Schema()
export class DividendInvoicePayment extends Payment {}

export const DividendInvoicePaymentSchema = SchemaFactory.createForClass(DividendInvoicePayment);


@Schema()
export class PurchasePayment extends Payment {
  @Prop({type: Boolean, default: false})
  forSale: boolean;

}

export const purchasePaymentSchema = SchemaFactory.createForClass(PurchasePayment);


@Schema()
export class Prepayment extends Payment {
  @Prop({type: Boolean, default: false})
  forSale: boolean;

}

export const PrepaymentSchema = SchemaFactory.createForClass(Prepayment);


@Schema()
export class SalaryPayment extends BasePayment {
  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: ObjectID | Invoice;

  @Prop({type: Boolean, default: true})
  isExpense: boolean;

  @Prop([{
    _id: {type: ObjectId, ref: 'Employee', default: null},
    name: {type: Object, default: null},
    paidAmount: Number,
    differenceAmount: {type: Number, default: 0, set: setPrice}
  }])
  supplier: {
    _id: ObjectID,
    name: object,
    paidAmount: number,
    differenceAmount: number
  }[];

  @Prop({type: ObjectId, ref: 'ProductCategory', default: null})
  paymentMethod: string | ObjectID | ProductCategory;

  @Prop([{type: ObjectId, ref: 'PayRoll', default: null}])
  paymentRef: (string | ObjectID | PayRoll)[];

  @Prop({type: Date, default: null})
  period: Date;

}

export const salaryPaymentSchema = SchemaFactory.createForClass(SalaryPayment);


@Schema()
export class PayOut extends BasePayment {
  @Prop({type: Boolean, default: false})
  forSale: boolean;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  supplier: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: string | ObjectID | PaymentMethod;

  @Prop({type: String, default: ''})
  paymentRef: string;

  @Prop({type: Date, default: null})
  period: Date;

}

export const payOutSchema = SchemaFactory.createForClass(PayOut);


function setName(this: Document & BasePayment, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'payment'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }

    this.name += '_' + rate.value.seq;

    next();
  });
}

paymentSchema.pre('save', setName);
PrepaymentSchema.pre('save', setName);
ProformaPaymentSchema.pre('save', setName);
InvoicePaymentSchema.pre('save', setName);
ExpensesInvoicePaymentSchema.pre('save', setName);
DividendInvoicePaymentSchema.pre('save', setName);
salaryPaymentSchema.pre('save', setName);
purchasePaymentSchema.pre('save', setName);

/* PaymentSchema.post('save', function (doc) {
 var payment = this;
 var paymentDate = new Date(this.date);
 var db = payment.db.db;
 var invoiceId = doc.invoice._id;

 console.log('===================================================');
 console.log('||' + invoiceId + '||');
 console.log('===================================================');

 if(paymentDate === 'Invalid Date'){
 paymentDate = new Date();
 }

 db.collection('Invoice').findOneAndUpdate({
 _id: doc.invoice._id
 },
 //[['name', 1]],
 {
 $set: {paymentDate: paymentDate.toString()}
 },
 {
 returnOriginal: false
 },
 function (err, result) {
 if (err) {
 return console.error('An error was occurred during updating %s', doc.invoice);
 }

 console.log('Invoice %s was updated success', doc.invoice);
 console.dir(result);
 });
 });*/

salaryPaymentSchema.pre('save', function (this: Document & SalaryPayment, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'salary'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }

    this.name = this.year + '/' + this.month + '_' + rate.value.seq;

    next();
  });
});
salaryPaymentSchema.post('save', function (this: Document & SalaryPayment, doc) {
  const db = this.db.db;

  db.collection('Invoice').findOneAndUpdate({
      _id: doc.invoice instanceof ObjectID ? doc.invoice : doc.invoice._id
    },
    // [['name', 1]],
    {
      $set: {paymentDate: new Date()}
    },
    err => {
      if (err) {
        return console.error('An error was occurred during updating %s', doc.invoice);
      }

      console.log('Invoice %s was updated success', doc.invoice);
    });
});

payOutSchema.pre('save', function (this: Document & PayOut, next) {
  this.name = new Date().valueOf().toString();
  next();
});
