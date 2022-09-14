import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Invoice', discriminatorKey: '_type'})
export class Base {
  _id: ObjectID;

  @Prop()
  ID: number;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Boolean, default: true})
  forSales: boolean;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  supplier: ObjectID;

  @Prop({type: ObjectId, ref: 'Quotation', default: null})
  sourceDocument: ObjectID;

  @Prop({type: String, default: 'free'})
  paymentReference: string;

  @Prop({type: Date, default: Date.now})
  invoiceDate: Date;

  @Prop()
  dueDate: Date;

  @Prop()
  paymentDate: Date;

  @Prop({type: ObjectId, ref: 'journal', default: null})
  journal: ObjectID;

  @Prop({
    type: {
      _id: {type: String, ref: 'currency', default: ''},
      rate: {type: Number, default: 1}
    }
  })
  currency: {
    _id: string,
    rate: number
  };

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  salesPerson: ObjectID;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerms: ObjectID;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: ObjectID;

  @Prop({
    type: {
      _id: false,
      total: {type: Number, default: 0},
      balance: {type: Number, default: 0},
      unTaxed: {type: Number, default: 0},
      discount: {type: Number, default: 0},
      taxes: {type: Number, default: 0}
    }
  })
  paymentInfo: {
    _id: false,
    total: number,
    balance: number,
    unTaxed: number,
    discount: number,
    taxes: number
  };

  @Prop([{type: ObjectId, ref: 'Payment', default: null}])
  payments: ObjectID[];

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

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

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Boolean, default: false})
  invoiced: boolean;

  @Prop({type: Boolean, default: true})
  removable: boolean;

  @Prop({type: Boolean, default: false})
  approved: boolean;

  @Prop({type: Boolean, default: false})
  emailed: boolean;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({type: String, default: ''})
  integrationId: string;

  @Prop({type: Boolean, default: true})
  reconcile: boolean;

}

export const baseSchema = SchemaFactory.createForClass(Base);


@Schema()
export class JobsInvoice extends Base {
  @Prop({type: Boolean, default: true})
  forSales: boolean;

  @Prop([{
    _id: false,
    quantity: {type: Number, default: 1},
    unitPrice: Number,
    product: {type: ObjectId, ref: 'Product', default: null},
    description: {type: String, default: ''},
    jobs: {type: ObjectId, ref: 'jobs', default: null},
    taxes: {type: Number, default: 0},
    subTotal: Number
  }])
  products: {
    _id: false,
    quantity: number,
    unitPrice: number,
    product: ObjectID,
    description: string,
    jobs: ObjectID,
    taxes: number,
    subTotal: number
  }[];

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

}

export const jobsInvoiceSchema = SchemaFactory.createForClass(JobsInvoice);


@Schema()
export class WriteOff extends Base {
  @Prop([{
    _id: false,
    quantity: {type: Number, default: 1},
    unitPrice: Number,
    product: {type: ObjectId, ref: 'Product', default: null},
    description: {type: String, default: ''},
    jobs: {type: ObjectId, ref: 'jobs', default: null},
    taxes: {type: Number, default: 0},
    subTotal: Number

  }])
  products: {
    _id: false,
    quantity: number,
    unitPrice: number,
    product: ObjectID,
    description: string,
    jobs: ObjectID,
    taxes: number,
    subTotal: number
  }[];

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

}

export const writeOffSchema = SchemaFactory.createForClass(WriteOff);


@Schema()
export class Proforma extends JobsInvoice {

}

export const proformaSchema = SchemaFactory.createForClass(Proforma);


@Schema()
export class PayRollInvoice extends Base {
  @Prop({type: Boolean, default: true})
  expense: boolean;

  @Prop([{
    _id: false,
    product: [{type: ObjectId, ref: 'PayRoll', default: null}],
    paid: Number,
    diff: Number
  }])
  products: {
    _id: false,
    product: ObjectID[],
    paid: number,
    diff: number
  }[];

}

export const payRollInvoiceSchema = SchemaFactory.createForClass(PayRollInvoice);


@Schema()
export class Invoices extends Base {
  @Prop({type: ObjectId, ref: 'Order', default: null})
  sourceDocument: ObjectID;

}

export const invoicesSchema = SchemaFactory.createForClass(Invoices);


@Schema()
export class PurchaseInvoices extends Base {
  @Prop({type: ObjectId, ref: 'Order', default: null})
  sourceDocument: ObjectID;

}

export const purchaseInvoicesSchema = SchemaFactory.createForClass(PurchaseInvoices);


@Schema()
export class Invoice extends Base {
  @Prop([{
    _id: false,
    quantity: {type: Number, default: 1},
    unitPrice: Number,
    product: {type: ObjectId, ref: 'Product', default: null},
    description: {type: String, default: ''},
    taxes: [{
      _id: false,
      taxCode: {type: ObjectId, ref: 'taxes', default: null},
      tax: {type: Number, default: 0}
    }],

    subTotal: Number,
    debitAccount: {type: ObjectId, ref: 'chartOfAccount', default: null},
    creditAccount: {type: ObjectId, ref: 'chartOfAccount', default: null}
  }])
  products: Partial<{
    _id: false,
    quantity: number,
    unitPrice: number,
    product: ObjectID,
    description: string,
    taxes: {
      _id: false,
      taxCode: ObjectID,
      tax: number
    }[],
    subTotal: number,
    debitAccount: ObjectID,
    creditAccount: ObjectID
  }>[];

}

export const invoiceSchema = SchemaFactory.createForClass(Invoice);


@Schema()
export class ExpensesInvoice extends Invoice {
  @Prop({type: ObjectId, ref: 'expensesCategory', default: null})
  expensesCategory: ObjectID;

}

export const expensesInvoiceSchema = SchemaFactory.createForClass(ExpensesInvoice);


@Schema()
export class DividendInvoice extends Invoice {
  @Prop([{
    _id: false,
    quantity: {type: Number, default: 1},
    unitPrice: Number,
    product: {type: ObjectId, ref: 'Employees', default: null},
    description: {type: String, default: ''},
    taxes: [{
      _id: false,
      taxCode: {type: ObjectId, ref: 'taxes', default: null},
      tax: {type: Number, default: 0}
    }],

    subTotal: Number
  }])
  products: {
    _id: false,
    quantity: number,
    unitPrice: number,
    product: ObjectID,
    description: string,
    taxes: {
      _id: false,
      taxCode: ObjectID,
      tax: number
    }[],
    subTotal: number
  }[];

}

export const dividendInvoiceSchema = SchemaFactory.createForClass(DividendInvoice);


/*    function setPrice(num) {
 return num * 100;
 };*/

dividendInvoiceSchema.pre('save', function (this: Document & DividendInvoice, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'DividendDeclaration'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'DD' + rate.value.seq;

    next();
  });
});

writeOffSchema.pre('save', function (this: Document & WriteOff, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'WriteOff'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'WO' + rate.value.seq;

    next();
  });
});

invoiceSchema.pre('save', function (this: Document & Invoice, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'invoice'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'PI' + rate.value.seq;

    next();
  });
});

invoicesSchema.pre('save', function (this: Document & Invoice, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'invoice'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'SI' + rate.value.seq;

    next();
  });
});

purchaseInvoicesSchema.pre('save', function (this: Document & PurchaseInvoices, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'invoice'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.name = 'PI' + rate.value.seq;

    next();
  });
});

purchaseInvoicesSchema.set('toJSON', {getters: true});
jobsInvoiceSchema.set('toJSON', {getters: true});
expensesInvoiceSchema.set('toJSON', {getters: true});
dividendInvoiceSchema.set('toJSON', {getters: true});
payRollInvoiceSchema.set('toJSON', {getters: true});
invoiceSchema.set('toJSON', {getters: true});
invoicesSchema.set('toJSON', {getters: true});
writeOffSchema.set('toJSON', {getters: true});


function setName(this: Document & Proforma, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
      dbName: db.databaseName,
      name: 'proforma',
      quotation: this.name
    }, {
      $inc: {seq: 1}
    }, {
      returnDocument: 'after',
      upsert: true
    },
    (err, rate) => {
      if (err) {
        return next(err);
      }

      this.name += '_' + rate.value.seq;

      next();
    });
}

proformaSchema.pre('save', setName);
