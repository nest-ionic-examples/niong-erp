import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'matchMagento'})
export class Match {
  @Prop({type: String, default: ''})
  entity: string;

  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: JSON, default: {}})
  fields: JSON;

}

export const matchSchema = SchemaFactory.createForClass(Match);
