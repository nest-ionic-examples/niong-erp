import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'projectMembers'})
export class ProjectMember {
  @Prop({type: ObjectId, ref: 'Project'})
  projectId: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees'})
  employeeId: ObjectID;

  @Prop({type: ObjectId, ref: 'bonusType'})
  bonusId: ObjectID;

  @Prop({type: ObjectId, ref: 'projectPosition'})
  projectPositionId: ObjectID;

  @Prop({type: Date})
  startDate: Date;

  @Prop({type: Date})
  endDate: Date;

}

export const projectMemberSchema = SchemaFactory.createForClass(ProjectMember);
