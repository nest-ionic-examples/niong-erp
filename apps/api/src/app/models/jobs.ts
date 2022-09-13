import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'jobs'})
export class Jobs {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  number: string;

  @Prop({type: String, default: ''})
  description: string;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({
    type: String,
    enum: ['Not Ordered', 'Ordered', 'Invoiced'],
    default: 'Not Ordered'
  })
  type: string;

  @Prop([{type: ObjectId, ref: 'wTrack', default: null}])
  wTracks: ObjectID[];

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({type: ObjectId, ref: 'Quotation', default: null})
  quotation: ObjectID;

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: ObjectID;

  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: ObjectID;

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: Boolean, default: true})
  reconcile: boolean;

  @Prop({type: ObjectId, ref: 'warehouse', default: null})
  warehouse: ObjectID;

}

export const jobsSchema = SchemaFactory.createForClass(Jobs);


jobsSchema.pre('save', function (this: Document & Jobs, next) {
  const db = this.db.db;

  db.collection('settings').findOneAndUpdate({
    dbName: db.databaseName,
    name: 'jobs'
  }, {
    $inc: {seq: 1}
  }, {
    returnDocument: 'after',
    upsert: true
  }, (err, rate) => {
    if (err) {
      return next(err);
    }
    this.number = 'SP' + rate.value.seq;

    next();
  });
});
