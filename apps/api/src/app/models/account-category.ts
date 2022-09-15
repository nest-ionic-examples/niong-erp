import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';

@Schema({collection: 'accountsCategories'})
export class AccountCategory {
  @Prop({type: String, default: 'All'})
  name: string;

  @Prop({type: String, default: 'All'})
  fullName: string;

  @Prop({type: ObjectId, ref: 'AccountCategory', default: null})
  parent: string | ObjectID | AccountCategory;

  @Prop([{type: ObjectId, default: null}])
  child: (string | ObjectID | AccountCategory)[];

  @Prop([{type: ObjectId, ref: 'User', default: null}])
  users: ObjectID[];

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date, default: Date.now}
    }
  })
  createdBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({
    type: {
      user: {type: ObjectId, ref: 'User', default: null},
      date: {type: Date, default: Date.now}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({type: Number, default: 0})
  nestingLevel: number;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: Boolean, default: false})
  main: boolean;

  @Prop({type: Boolean, default: true})
  removable: boolean;

  @Prop({type: Number, default: 0})
  productsCount: number;

}

export const accountCategorySchema = SchemaFactory.createForClass(AccountCategory);
