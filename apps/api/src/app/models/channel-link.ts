import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Product } from './product';
import { Integration } from './integration';
import { PriceList } from './price-list';


@Schema({collection: 'channelLinks'})
export class ChannelLink {
  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: string | ObjectID | Product;

  @Prop({type: String, default: null})
  linkId: string;

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: string | ObjectID | Integration;

  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  priceList: string | ObjectID | PriceList;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const channelLinkSchema = SchemaFactory.createForClass(ChannelLink);
