import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'ProductOptions'})
export class Options {
  @Prop({type: String, default: 'default'})
  name: string;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

}

export const OptionsSchema = SchemaFactory.createForClass(Options);
