import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'channelLinks'})
export class ChannelLink {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop({type: String, default: null})
  linkId: string;

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  priceList: ObjectID;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const channelLinkSchema = SchemaFactory.createForClass(ChannelLink);
