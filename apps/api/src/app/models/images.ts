import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Images'})
export class Images {
  @Prop({type: String, default: ''})
  imageSrc: string;

  @Prop({type: String, default: ''})
  product: string;

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({type: String, default: ''})
  integrationId: string;
}

export const ImagesSchema = SchemaFactory.createForClass(Images);
