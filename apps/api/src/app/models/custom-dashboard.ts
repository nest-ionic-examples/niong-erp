import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'CustomDashboard'})
export class CustomDashboard {
  @Prop({type: String, default: 'Dashboard'})
  name: string;

  @Prop({type: Date, default: Date.now})
  recentDate: Date;

  @Prop({type: Number, default: 4})
  rows: number;

  @Prop({type: Number, default: 9})
  columns: number;

  @Prop({type: String})
  description: string;

  @Prop({type: Boolean, default: true})
  publicAccess: boolean;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    date: Date,
    user: ObjectID
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

  @Prop([{type: ObjectId, ref: 'CustomChart'}])
  charts: ObjectID[];

}

export const customDashboardSchema = SchemaFactory.createForClass(CustomDashboard);
