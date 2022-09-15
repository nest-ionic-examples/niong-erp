import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'History'})
export class History {
  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: ObjectId, default: null})
  contentId: ObjectID;

  @Prop({type: String, default: ''})
  collectionName: string;

  @Prop({type: Boolean, default: false})
  isRef: boolean;

  @Prop({type: String, default: ''})
  fieldCollection: string;

  @Prop({type: String, default: ''})
  contentType: string;

  @Prop({type: String, default: ''})
  changedField: string;

  @Prop({type: Object, default: null})
  newValue: object;

  @Prop({type: Object, default: null})
  prevValue: object;

  @Prop({type: ObjectId, ref: 'User', default: null})
  editedBy: ObjectID;

}

export const historySchema = SchemaFactory.createForClass(History);

