import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Project'})
export class Project {
  @Prop({type: String, default: 'emptyProject'})
  projectShortDesc: string;

  @Prop({type: String, default: 'emptyProject', unique: true})
  name: string;

  @Prop([{type: ObjectId, ref: 'Tasks', default: null}])
  task: ObjectID[];

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  customer: ObjectID;

  @Prop()
  description: string;

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

  @Prop({type: ObjectId, ref: 'workflows', default: null})
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
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: String, default: ''})
  projecttype: string;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerms: ObjectID;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  paymentMethod: ObjectID;

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'Users', default: null},
      date: {type: Date}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: Number, default: 1})
  health: number;

  @Prop()
  ID: number;

  @Prop([{
    employeeId: {
      type: ObjectId,
      ref: 'Employees'
    },

    bonusId: {
      type: ObjectId,
      ref: 'bonusType'
    },

    startDate: {type: Date, default: null},
    startWeek: Number,
    startYear: Number,
    endDate: {type: Date, default: null},
    endWeek: Number,
    endYear: Number
  }])
  bonus: {
    employeeId: ObjectID,
    bonusId: ObjectID,
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
      projectTeam: [{type: ObjectId, ref: 'jobs', default: null}]
    }
  })
  budget: {
    _id: false,
    bonus: [],
    projectTeam: ObjectID[]
  };

}

export const projectSchema = SchemaFactory.createForClass(Project);
