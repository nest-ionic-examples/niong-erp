import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'savedFilters'})
export class SavedFilters {
  @Prop()
  ID: number;

  @Prop()
  name: string;

  @Prop()
  filter: JSON;

}

export const savedFiltersSchema = SchemaFactory.createForClass(SavedFilters);
