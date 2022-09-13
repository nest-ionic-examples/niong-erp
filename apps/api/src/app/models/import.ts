import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Imports'})
export class Import {
  @Prop({type: ObjectId, default: null, ref: 'Users'})
  user: ObjectID;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop()
  result: JSON;

  @Prop({type: String, default: ''})
  filePath: string;

  @Prop({type: String, default: ''})
  fileName: string;

  @Prop({type: Number})
  timeStamp: number;

  @Prop({type: String, default: ''})
  reason: string;

}

export const importSchema = SchemaFactory.createForClass(Import);
