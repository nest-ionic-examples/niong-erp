import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'ProductCategories'})
export class Category {
  @Prop({type: String, default: 'All'})
  name: string;

  @Prop({type: String, default: 'All'})
  fullName: string;

  @Prop({type: ObjectId, ref: 'ProductCategory', default: null})
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

  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({type: String, default: ''})
  integrationId: string;

  @Prop({type: Number, default: 0})
  nestingLevel: number;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: Boolean, default: false})
  main: boolean;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  taxesAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  debitAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  creditAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  bankExpensesAccount: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  otherIncome: ObjectID;

  @Prop({type: ObjectId, ref: 'chartOfAccount', default: null})
  otherLoss: ObjectID;

}

export const CategorySchema = SchemaFactory.createForClass(Category);
