import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'followers'})
export class Follower {
  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: ObjectId, ref: 'Users', default: null})
  followerId: ObjectID;

  @Prop({type: ObjectId, default: null})
  contentId: ObjectID;

  @Prop({type: String, default: ''})
  collectionName: string;

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    user: {type: ObjectId, ref: 'Users', default: null},
    date: {type: Date, default: Date.now}
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

}

export const FollowerSchema = SchemaFactory.createForClass(Follower);
