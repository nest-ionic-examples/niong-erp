import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'DealTasks'})
export class Tasks {
  @Prop({type: Number, default: 0})
  taskCount: number;

  @Prop({type: ObjectId, ref: 'Opportunities', default: null})
  deal: ObjectID;

  @Prop()
  dealDate: Date;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  assignedTo: ObjectID;

  @Prop({type: ObjectId, ref: 'tags', default: null})
  category: ObjectID;

  @Prop()
  description: string;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  company: ObjectID;

  @Prop()
  companyDate: Date;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  contact: ObjectID;

  @Prop()
  contactDate: Date;

  @Prop({type: Date, default: Date.now})
  dueDate: Date;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop()
  ID: number;

}

export const tasksSchema = SchemaFactory.createForClass(Tasks);
