import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Project } from './project';
import { Employee } from './employee';
import { BonusType } from './bonus-type';
import { ProjectPosition } from './project-position';

@Schema({collection: 'projectMembers'})
export class ProjectMember {
  @Prop({type: ObjectId, ref: 'Project'})
  projectId: string | ObjectID | Project;

  @Prop({type: ObjectId, ref: 'Employee'})
  employeeId: string | ObjectID | Employee;

  @Prop({type: ObjectId, ref: 'BonusType'})
  bonusId: string | ObjectID | BonusType;

  @Prop({type: ObjectId, ref: 'ProjectPosition'})
  projectPositionId: string | ObjectID | ProjectPosition;

  @Prop({type: Date})
  startDate: Date;

  @Prop({type: Date})
  endDate: Date;

}

export const projectMemberSchema = SchemaFactory.createForClass(ProjectMember);
