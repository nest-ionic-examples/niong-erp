import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Tasks'})
export class Task {
  @Prop({type: String, required: true})
  summary: string;

  @Prop({type: Number, default: 0})
  taskCount: number;

  @Prop({type: ObjectId, ref: 'Project', default: null})
  project: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  assignedTo: ObjectID;

  @Prop([String])
  tags: string[];

  @Prop()
  description: string;

  @Prop({type: String, default: 'P3'})
  priority: string;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  customer: ObjectID;

  @Prop({type: Date, default: Date.now})
  StartDate: Date;

  @Prop({type: Date, default: Date.now})
  EndDate: Date;

  @Prop({type: Number, default: 0})
  duration: number;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

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
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Array, default: []})
  attachments: [];

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

  @Prop()
  ID: number;

}

export const taskSchema = SchemaFactory.createForClass(Task);
