import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'GoodsNote', discriminatorKey: '_type'})
export class GoodsNote {
  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: ObjectID;

  @Prop({type: String, default: ''})
  reference: string;

  @Prop({type: Number, default: 1})
  boxes: number;

  @Prop({type: ObjectId, ref: 'ShippingMethod', default: null})
  shippingMethod: ObjectID;

  @Prop({type: Number, default: 0})
  shippingCost: number;

  @Prop({type: Number, default: 1.00})
  weight: number;

  @Prop()
  releaseDate: Date;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: String, default: ''})
  description: string;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: ObjectID;

  @Prop({type: ObjectId, ref: 'ManufacturingOrder', default: null})
  manufacturingOrder: ObjectID;

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop([{
    _id: false,
    orderRowId: {type: ObjectId, ref: 'orderRows', default: null},
    product: {type: ObjectId, ref: 'Product', default: null},
    locationsDeliver: [{type: ObjectId, ref: 'location', default: null}],
    cost: {type: Number, default: 0},
    quantity: Number
  }])
  orderRows: Partial<{
    _id: false,
    orderRowId: ObjectID,
    product: ObjectID,
    locationsDeliver: ObjectID[],
    cost: number,
    quantity: number
  }>[];

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: ObjectID;

  @Prop()
  integrationId: string;

  @Prop()
  sequence: number;

  @Prop()
  name: string;

}

export const goodsNoteSchema = SchemaFactory.createForClass(GoodsNote);


@Schema()
export class GoodsOutNote extends GoodsNote {
  @Prop({
    type: {
      shipped: Boolean,
      picked: Boolean,
      packed: Boolean,
      printed: Boolean,
      shippedOn: Date,
      pickedOn: Date,
      packedOn: Date,
      printedOn: Date,
      pickedById: {type: ObjectId, ref: 'User', default: null},
      packedById: {type: ObjectId, ref: 'User', default: null},
      shippedById: {type: ObjectId, ref: 'User', default: null},
      printedById: {type: ObjectId, ref: 'User', default: null},
    }
  })
  status: {
    shipped: boolean,
    picked: boolean,
    packed: boolean,
    printed: boolean,
    shippedOn: Date,
    pickedOn: Date,
    packedOn: Date,
    printedOn: Date,
    pickedById: ObjectID,
    packedById: ObjectID,
    shippedById: ObjectID,
    printedById: ObjectID
  };

  @Prop({type: Boolean, default: false})
  archived: boolean;

}

export const goodsOutNoteSchema = SchemaFactory.createForClass(GoodsOutNote);


@Schema()
export class GoodsInNote extends GoodsNote {
  @Prop({
    type: {
      received: Boolean,
      receivedOn: Date,
      receivedById: {type: ObjectId, ref: 'User', default: null}
    }
  })
  status: {
    received: boolean,
    receivedOn: Date,
    receivedById: ObjectID
  };

  @Prop()
  description: string;

  @Prop([{
    _id: false,
    orderRowId: {type: ObjectId, ref: 'orderRows', default: null},
    product: {type: ObjectId, ref: 'Product', default: null},
    cost: {type: Number, default: 0},
    locationsReceived: [{
      location: {type: ObjectId, ref: 'location', default: null},
      quantity: Number
    }],

    quantity: Number
  }])
  orderRows: Partial<{
    _id: false,
    orderRowId: ObjectID,
    product: ObjectID,
    cost: number,
    locationsReceived: {
      location: ObjectID,
      quantity: number
    }[],
    quantity: number
  }>[];

}

export const goodsInNoteSchema = SchemaFactory.createForClass(GoodsInNote);


@Schema()
export class StockCorrection extends GoodsInNote {

}

export const stockCorrectionSchema = SchemaFactory.createForClass(StockCorrection);


@Schema()
export class StockReturn extends GoodsInNote {
  @Prop({
    type: {
      received: Boolean,
      receivedOn: Date,
      receivedById: {type: ObjectId, ref: 'User', default: null}
    }
  })
  status: {
    received: boolean,
    receivedOn: Date,
    receivedById: ObjectID
  };

  @Prop()
  description: string;

  @Prop([{type: String, default: ''}])
  journalEntrySources: string[];

  @Prop([{
    _id: false,
    goodsOutNote: {type: ObjectId, ref: 'GoodsOutNote', default: null},
    goodsInNote: {type: ObjectId, ref: 'GoodsInNote', default: null},
    product: {type: ObjectId, ref: 'Product', default: null},
    cost: {type: Number, default: 0},
    quantity: Number,
    warehouse: {type: ObjectId, ref: 'Warehouse', default: null}
  }])
  orderRows: {
    _id: false,
    goodsOutNote: ObjectID,
    goodsInNote: ObjectID,
    product: ObjectID,
    cost: number,
    quantity: number,
    warehouse: ObjectID
  }[];

}

export const stockReturnSchema = SchemaFactory.createForClass(StockReturn);


@Schema()
export class StockTransactions extends GoodsInNote {
  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouseTo: ObjectID;

  @Prop({
    type: {
      shipped: Boolean,
      received: Boolean,
      packed: Boolean,
      printed: Boolean,
      shippedOn: Date,
      receivedOn: Date,
      packedOn: Date,
      printedOn: Date,
      receivedById: {type: ObjectId, ref: 'User', default: null},
      packedById: {type: ObjectId, ref: 'User', default: null},
      shippedById: {type: ObjectId, ref: 'User', default: null},
      printedById: {type: ObjectId, ref: 'User', default: null}
    }
  })
  status: {
    shipped: boolean,
    received: boolean,
    packed: boolean,
    printed: boolean,
    shippedOn: Date,
    receivedOn: Date,
    packedOn: Date,
    printedOn: Date,
    receivedById: ObjectID,
    packedById: ObjectID,
    shippedById: ObjectID,
    printedById: ObjectID
  };

  @Prop([{
    orderRowId: {type: ObjectId, ref: 'orderRows', default: null},
    product: {type: ObjectId, ref: 'Product', default: null},
    locationsDeliver: [{type: ObjectId, ref: 'location', default: null}],
    batchesDeliver: [{
      goodsNote: {type: ObjectId, ref: 'goodsInNotes', default: null},
      quantity: Number,
      cost: Number
    }],

    locationsReceived: [{
      location: {type: ObjectId, ref: 'location', default: null},
      quantity: Number
    }],

    cost: {type: Number, default: 0},
    quantity: Number
  }])
  orderRows: {
    orderRowId: ObjectID,
    product: ObjectID,
    locationsDeliver: ObjectID[],
    batchesDeliver: {
      goodsNote: ObjectID,
      quantity: number,
      cost: number
    }[],
    locationsReceived: {
      location: ObjectID,
      quantity: number
    }[],
    cost: number,
    quantity: number
  }[];

}

export const stockTransactionsSchema = SchemaFactory.createForClass(StockTransactions);


function setName(this: Document & GoodsNote, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'goodsOutNote',
    order: this.name
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }

    this.name += '*' + rate.value.seq;

    next();
  });
}

function setNameTransfer(this: Document & GoodsNote, next) {
  const db = this.db.db;
  const prefix = 'TX';

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

    this.name = prefix + '-' + rate.value.seq;

    next();
  });
}

function setNameReturns(this: Document & GoodsNote, next) {
  const db = this.db.db;
  const prefix = 'RT';

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

    this.name = prefix + '-' + rate.value.seq;

    next();
  });
}

function setNamePurchase(this: Document & GoodsNote, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'goodsInNote',
    order: this.name
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }

    this.name += '*' + rate.value.seq;

    next();
  });
}

goodsOutNoteSchema.pre('save', setName);
stockTransactionsSchema.pre('save', setNameTransfer);
goodsInNoteSchema.pre('save', setNamePurchase);
stockReturnSchema.pre('save', setNameReturns);















