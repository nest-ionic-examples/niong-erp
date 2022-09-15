import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';


@Schema(undefined)
export class Steps {
  @Prop({type: String})
  operation: string;

  @Prop({type: ObjectId, ref: 'workCentres'})
  workCentre: ObjectID;

  @Prop({type: String})
  description: string;

  @Prop({type: Number})
  duration: number;

}

export const stepsSchema = SchemaFactory.createForClass(Steps);


@Schema({collection: 'routing'})
export class Routing {
  @Prop({type: String})
  name: string;

  @Prop([stepsSchema])
  steps: Steps[];

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    date: string | ObjectID | User,
    user: ObjectID
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

}

export const routingSchema = SchemaFactory.createForClass(Routing);
