import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'savedFilters'})
export class SavedFilter {
  @Prop()
  ID: number;

  @Prop()
  name: string;

  @Prop({type: JSON})
  filter: JSON;

}

export const savedFilterSchema = SchemaFactory.createForClass(SavedFilter);
