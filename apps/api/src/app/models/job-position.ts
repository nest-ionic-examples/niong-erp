import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Department } from './department';
import { Workflow } from './workflow';
import { User } from './user';

@Schema({collection: 'JobPosition'})
export class JobPosition {
  @Prop({type: String, default: ''})
  name: string;

  @Prop({type: Number, default: 0})
  expectedRecruitment: number;

  @Prop({
    type: {
      id: String,
      name: String
    }
  })
  interviewForm: {
    id: string,
    name: string
  };

  @Prop({type: ObjectId, ref: 'Department'})
  department: string | ObjectID | Department;

  @Prop()
  description: string;

  @Prop()
  requirements: string;

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: 'owner' | 'group' | 'everyOne';

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

  @Prop({type: Number, default: 0})
  numberOfEmployees: number;

  @Prop({type: Number, default: 0})
  totalForecastedEmployees: number;

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

  @Prop({type: String, default: null})
  externalId: string;

  @Prop()
  ID: number;

}

export const jobPositionSchema = SchemaFactory.createForClass(JobPosition);
