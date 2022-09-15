import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Integration } from './integration';


@Schema({collection: 'Images'})
export class Image {
  @Prop({type: String, default: ''})
  imageSrc: string;

  @Prop({type: String, default: ''})
  product: string;

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: string | ObjectID | Integration;

  @Prop({type: String, default: ''})
  integrationId: string;
}

export const imageSchema = SchemaFactory.createForClass(Image);
