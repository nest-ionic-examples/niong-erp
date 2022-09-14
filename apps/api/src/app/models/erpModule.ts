import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'modules'})
export class ErpModule {
  @Prop()
  ID: number;

  @Prop()
  _id: number;

  @Prop()
  mname: string;

  @Prop({type: String, default: ''})
  href: string;

  @Prop([Number])
  ancestors: number[];

  @Prop({type: {}})
  users: object;

  @Prop()
  parrent: number;

  @Prop()
  sequence: number;

  @Prop()
  link: boolean;

  @Prop()
  visible: boolean;

  @Prop({type: Boolean, default: false})
  single: boolean;

}

export const erpModuleSchema = SchemaFactory.createForClass(ErpModule);
