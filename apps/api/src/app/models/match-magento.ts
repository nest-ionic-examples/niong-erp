import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'matchMagento'})
export class MatchMagento {
  @Prop({type: String, default: ''})
  entity: string;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: JSON, default: {}})
  fields: JSON;

}

export const matchMagentoSchema = SchemaFactory.createForClass(MatchMagento);
