import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'workflows'})
export class Workflow {
  @Prop()
  wId: string;

  @Prop()
  wName: string;

  @Prop()
  status: string;

  @Prop()
  name: string;

  @Prop()
  sequence: number;

  @Prop({type: Boolean, default: true})
  visible: boolean;

}

export const workflowSchema = SchemaFactory.createForClass(Workflow);
