import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Department'})
export class Department {
  @Prop({type: String, default: 'emptyDepartment'})
  name: string;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  parentDepartment: ObjectID;

  @Prop({type: ObjectId, ref: 'Employee', default: null})
  departmentManager: ObjectID;

  @Prop()
  isDevelopment: boolean;

  @Prop([{type: ObjectId, ref: 'User', default: null}])
  users: ObjectID[];

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: Number, default: 0})
  nestingLevel: number;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop()
  ID: number;

  @Prop({type: String, default: null})
  externalId: string;

}

export const departmentSchema = SchemaFactory.createForClass(Department);
