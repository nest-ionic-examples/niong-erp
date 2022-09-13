import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'CustomChart'})
export class CustomChart {
  @Prop({type: String, default: 'empty'})
  name: string;

  @Prop({type: Number})
  dataHeight: number;

  @Prop({type: Number})
  dataWidth: number;

  @Prop({type: Number})
  indexY: number;

  @Prop({type: Number})
  indexX: number;

  @Prop({type: String})
  nameId: string;

  @Prop({type: String})
  type: string;

  @Prop({type: String})
  dataset: string;

  @Prop({type: Boolean})
  forSales: boolean;

  @Prop({type: String})
  colorScheme: string;

  @Prop({type: ObjectId, ref: 'CustomDashboard'})
  dashboard: ObjectID;

  @Prop({type: String})
  startDate: string;

  @Prop({type: String})
  endDate: string;

}

export const CustomChartSchema = SchemaFactory.createForClass(CustomChart);
