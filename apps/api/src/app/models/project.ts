import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Task } from './task';
import { Customer } from './customer';
import { User } from './user';
import { Department } from './department';
import { PaymentTerm } from './payment-term';
import { Employee } from './employee';
import { BonusType } from './bonus-type';
import { Job } from './job';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Project'})
export class Project {
  @Prop({type: String, default: 'emptyProject'})
  projectShortDesc: string;

  @Prop({type: String, default: 'emptyProject', unique: true})
  name: string;

  @Prop([{type: ObjectId, ref: 'Task', default: null}])
  task: (string | ObjectID | Task)[];

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  customer: string | ObjectID | Customer;

  @Prop()
  description: string;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

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

  @Prop()
  StartDate: Date;

  @Prop()
  EndDate: Date;

  @Prop()
  TargetEndDate: Date;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: String, default: null})
  parent: string;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: ObjectID;

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

  @Prop({type: String, default: ''})
  projecttype: string;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerms: string | ObjectID | PaymentTerm;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: ObjectID;

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({type: Number, default: 1})
  health: number;

  @Prop()
  ID: number;

  @Prop([{
    employeeId: {type: ObjectId, ref: 'Employee'},
    bonusId: {type: ObjectId, ref: 'bonusType'},
    startDate: {type: Date, default: null},
    startWeek: Number,
    startYear: Number,
    endDate: {type: Date, default: null},
    endWeek: Number,
    endYear: Number
  }])
  bonus: {
    employeeId: string | ObjectID | Employee,
    bonusId: string | ObjectID | BonusType,
    startDate: Date,
    startWeek: number,
    startYear: number,
    endDate: Date,
    endWeek: number,
    endYear: number
  }[];

  @Prop({
    type: {
      _id: false,
      bonus: Array,
      projectTeam: [{type: ObjectId, ref: 'Job', default: null}]
    }
  })
  budget: {
    _id: false,
    bonus: [],
    projectTeam: (string | ObjectID | Job)[]
  };

}

export const projectSchema = SchemaFactory.createForClass(Project);
