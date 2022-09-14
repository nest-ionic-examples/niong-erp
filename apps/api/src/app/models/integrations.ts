import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'integrations'})
export class Integrations {
  @Prop({type: Date, default: new Date(0)})
  ordersDate: Date;

  @Prop({type: String, default: ''})
  channelName: string;

  @Prop({type: String, default: ''})
  dbName: string;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: ObjectId, default: null, ref: 'Users'})
  user: ObjectID;

  @Prop({type: String, default: ''})
  username: string;

  @Prop({type: String, default: ''})
  password: string;

  @Prop({type: String, default: ''})
  baseUrl: string;

  @Prop({
    type: {
      warehouse: {type: ObjectId, default: null, ref: 'warehouse'},
      location: {type: ObjectId, default: null, ref: 'location'}
    }
  })
  warehouseSettings: {
    warehouse: ObjectID,
    location: ObjectID
  };

  @Prop({type: Boolean, default: false})
  updateShippingStatus: boolean;

  @Prop({type: Boolean, default: false})
  updateShippingMethod: boolean;

  @Prop({type: Boolean, default: false})
  active: boolean;

  @Prop({type: String, default: ''})
  token: string;

  @Prop({type: String, default: ''})
  secret: string;

  @Prop({type: String, default: ''})
  consumerKey: string;

  @Prop({type: String, default: ''})
  consumerSecret: string;

  @Prop({type: ObjectId, default: null, ref: 'PriceList'})
  priceList: ObjectID;

  @Prop({type: ObjectId, default: null, ref: 'PaymentMethod'})
  bankAccount: ObjectID;

  @Prop({
    type: {
      _id: {type: Number, default: 0},
      name: {type: String, default: ''}
    }
  })
  shippingMethod: {
    _id: number,
    name: string
  };

  @Prop({type: Boolean, default: true})
  connected: boolean;

  @Prop({type: String, default: ''})
  version: string;

  @Prop({type: Date})
  lastSync: Date;

  @Prop([{type: String}])
  webhooks: string[];

  @Prop({type: String, default: ''})
  sharedSecret: string;

}

export const integrationsSchema = SchemaFactory.createForClass(Integrations);


integrationsSchema.index({baseUrl: 1, channelName: 1}, {unique: true});
