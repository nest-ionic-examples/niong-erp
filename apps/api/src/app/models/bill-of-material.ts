import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'billsOfMaterials'})
export class BillOfMaterial {
  @Prop({type: String, unique: true, default: 'BM'})
  name: string;

  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop({type: ObjectId, ref: 'routing', default: null})
  routing: ObjectID;

  @Prop({
    type: Boolean, default: false
  })
  isComponent: boolean;

  @Prop({
    type: Number, default: 0
  })
  quantity: number;

  @Prop({type: String, default: ''})
  description: string;

  @Prop([
    {
      component: {type: ObjectId, ref: 'Product', default: null},
      quantity: {type: Number, default: 0},
      info: {type: String, default: ''}
    }
  ])
  components: {
    component: ObjectID,
    quantity: number,
    info: string
  }[];

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const billOfMaterialSchema = SchemaFactory.createForClass(BillOfMaterial);


function setName(next) {
  const quotation = this as Document & BillOfMaterial;
  const db = quotation.db.db;
  const prefix = 'BM';

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

    quotation.name = prefix + '_' + rate.value.seq;

    next();
  });
}

billOfMaterialSchema.pre('save', setName);
