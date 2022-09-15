import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Employee } from './employee';
import { Project } from './project';
import { Customer } from './customer';
import { Workflow } from './workflow';
import { User } from './user';

@Schema({collection: 'Tasks'})
export class Task {
  @Prop({type: String, required: true})
  summary: string;

  @Prop({type: Number, default: 0})
  taskCount: number;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: string | ObjectID | Project;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  assignedTo: string | ObjectID | Employee;

  @Prop([String])
  tags: string[];

  @Prop()
  description: string;

  @Prop({type: String, default: 'P3'})
  priority: string;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  customer: string | ObjectID | Customer;

  @Prop({type: Date, default: Date.now})
  StartDate: Date;

  @Prop({type: Date, default: Date.now})
  EndDate: Date;

  @Prop({type: Number, default: 0})
  duration: number;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: Number, default: 0})
  estimated: number;

  @Prop({type: Number, default: 0})
  logged: number;

  @Prop({type: Number, default: 0})
  remaining: number;

  @Prop({type: Number, default: 0})
  progress: number;

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
    user: string | ObjectID | User,
    date: Date
  };

  @Prop()
  ID: number;

}

export const taskSchema = SchemaFactory.createForClass(Task);
