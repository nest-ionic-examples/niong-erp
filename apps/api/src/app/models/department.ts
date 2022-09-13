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

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  departmentManager: ObjectID;

  @Prop()
  isDevelopment: boolean;

  @Prop([{type: ObjectId, ref: 'Users', default: null}])
  users: ObjectID[];

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date}
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

export const DepartmentSchema = SchemaFactory.createForClass(Department);
