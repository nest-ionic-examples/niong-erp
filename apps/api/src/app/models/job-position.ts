import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

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
  department: ObjectID;

  @Prop()
  description: string;

  @Prop()
  requirements: string;

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

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

  @Prop({type: Number, default: 0})
  numberOfEmployees: number;

  @Prop({type: Number, default: 0})
  totalForecastedEmployees: number;

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

  @Prop({type: String, default: null})
  externalId: string;

  @Prop()
  ID: number;

}

export const jobPositionSchema = SchemaFactory.createForClass(JobPosition);
