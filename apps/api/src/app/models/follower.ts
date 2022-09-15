import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'followers'})
export class Follower {
  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: ObjectId, ref: 'User', default: null})
  followerId: ObjectID;

  @Prop({type: ObjectId, default: null})
  contentId: ObjectID;

  @Prop({type: String, default: ''})
  collectionName: string;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

}

export const followerSchema = SchemaFactory.createForClass(Follower);
