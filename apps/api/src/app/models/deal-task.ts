import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Workflow } from './workflow';
import { User } from './user';
import { Customer } from './customer';
import { Tag } from './tag';
import { Opportunity } from './opportunity';
import { Employee } from './employee';

@Schema({collection: 'DealTasks'})
export class DealTask {
  @Prop({type: Number, default: 0})
  taskCount: number;

  @Prop({type: ObjectId, ref: 'Opportunity', default: null})
  deal: ObjectID | Opportunity;

  @Prop()
  dealDate: Date;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  assignedTo: ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'Tag', default: null})
  category: ObjectID | Tag;

  @Prop()
  description: string;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  company: ObjectID | Customer;

  @Prop()
  companyDate: Date;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  contact: ObjectID | Customer;

  @Prop()
  contactDate: Date;

  @Prop({type: Date, default: Date.now})
  dueDate: Date;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: ObjectID | Workflow;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: ObjectID | User,
    date: Date
  };

  @Prop()
  ID: number;

}

export const dealTaskSchema = SchemaFactory.createForClass(DealTask);
