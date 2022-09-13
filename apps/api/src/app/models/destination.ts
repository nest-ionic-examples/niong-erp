import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Destination'})
export class Destination {
  @Prop()
  name: string;

}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
