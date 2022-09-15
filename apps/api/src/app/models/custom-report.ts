import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'CustomReport'})
export class CustomReport {
  @Prop({type: String, default: 'Report'})
  name: string;

  @Prop({type: Date, default: Date.now})
  recentDate: Date;

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

  @Prop({
    type: {
      from: {type: Date, default: Date.now},
      to: {type: Date, default: Date.now}
    }
  })
  dateRange: {
    from: Date,
    to: Date
  };

  @Prop({type: String, default: ''})
  reportType: string;

  @Prop({type: String, default: ''})
  reportCategory: string;

  @Prop([{type: Number}])
  columnOrder: number[];

  @Prop([{
    type: 'String'
  }])
  rows: 'String'[];

}

export const customReportSchema = SchemaFactory.createForClass(CustomReport);
