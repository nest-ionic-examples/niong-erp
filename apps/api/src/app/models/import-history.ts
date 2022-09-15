import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'ImportHistories'})
export class ImportHistory {
  @Prop({
    type: Date,
    default: Date.now
  })
  date: Date;

  @Prop({
    type: String,
    default: ''
  })
  fileName: string;

  @Prop({
    type: String,
    default: ''
  })
  filePath: string;

  @Prop({
    type: ObjectId,
    ref: 'User',
    default: null
  })
  user: ObjectID;

  @Prop({
    type: String,
    default: ''
  })
  type: string;

  @Prop({
    type: String,
    default: 'Finished'
  })
  status: string;

  @Prop({
    type: String,
    default: ''
  })
  reportFile: string;

  @Prop({
    type: String,
    default: ''
  })
  reportFileName: string;

}

export const importHistorySchema = SchemaFactory.createForClass(ImportHistory);
