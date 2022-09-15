import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Workflow } from './workflow';
import { WTrack } from './w-track';
import { Project } from './project';
import { Quotation } from './quotation';
import { Order } from './order';
import { Invoice, Invoices } from './invoice';
import { User } from './user';
import { Warehouse } from './warehouse';

@Schema({collection: 'jobs'})
export class Job {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: String, default: ''})
  number: string;

  @Prop({type: String, default: ''})
  description: string;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

  @Prop({
    type: String,
    enum: ['Not Ordered', 'Ordered', 'Invoiced'],
    default: 'Not Ordered'
  })
  type: 'Not Ordered' | 'Ordered' | 'Invoiced';

  @Prop([{type: ObjectId, ref: 'WTrack', default: null}])
  wTracks: (string | ObjectID | WTrack)[];

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: string | ObjectID | Project;

  @Prop({type: ObjectId, ref: 'Quotation', default: null})
  quotation: string | ObjectID | Quotation;

  @Prop({type: ObjectId, ref: 'Order', default: null})
  order: string | ObjectID | Order;

  @Prop({type: ObjectId, ref: 'Invoice', default: null})
  invoice: string | ObjectID | Invoice;

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

  @Prop({type: Boolean, default: true})
  reconcile: boolean;

  @Prop({type: ObjectId, ref: 'Warehouse', default: null})
  warehouse: string | ObjectID | Warehouse;

}

export const jobsSchema = SchemaFactory.createForClass(Job);


jobsSchema.pre('save', function (this: Document & Job, next) {
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
