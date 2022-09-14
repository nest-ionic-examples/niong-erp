import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'magentoConnections'})
export class MagentoData {
  @Prop({type: String, default: ''})
  oauthConsumerKey: string;

  @Prop({type: String, default: ''})
  oauthConsumerSecret: string;

  @Prop({type: String, default: ''})
  oauthVerifier: string;

  @Prop({type: String, default: ''})
  storeBaseUrl: string;

}

export const magentoDataSchema = SchemaFactory.createForClass(MagentoData);
