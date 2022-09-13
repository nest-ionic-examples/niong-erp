import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'expensesCategories'})
export class Category {
  @Prop({type: String, default: 'All'})
  name: string;

  @Prop({type: String, default: 'All'})
  fullName: string;

  @Prop({type: ObjectId, ref: 'expensesCategory', default: null})
  parent: ObjectID;

  @Prop([{type: ObjectId, default: null}])
  child: ObjectID[];

  @Prop([{type: ObjectId, ref: 'Users', default: null}])
  users: ObjectID[];

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

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  account: ObjectID;

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

  @Prop({type: String, default: ''})
  classIcon: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);








