import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'Destination'})
export class Destination {
  @Prop()
  name: string;

}

export const destinationSchema = SchemaFactory.createForClass(Destination);
