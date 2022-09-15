import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { User } from './user';
import { Product } from './product';
import { Integration } from './integration';
import { ChartOfAccount } from './chart-of-account';

@Schema({collection: 'ProductCategories'})
export class ProductCategory {
  @Prop({type: String, default: 'All'})
  name: string;

  @Prop({type: String, default: 'All'})
  fullName: string;

  @Prop({type: ObjectId, ref: 'ProductCategory', default: null})
  parent: string | ObjectID | ProductCategory;

  @Prop([{type: ObjectId, default: null}])
  child: ObjectID[];

  @Prop([{type: ObjectId, ref: 'User', default: null}])
  users: (string | ObjectID | User)[];

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: string | ObjectID | User,
    date: Date
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

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: string | ObjectID | Integration;

  @Prop({type: String, default: ''})
  integrationId: string;

  @Prop({type: Number, default: 0})
  nestingLevel: number;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop({type: Boolean, default: false})
  main: boolean;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  taxesAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  debitAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  creditAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  bankExpensesAccount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  otherIncome: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  otherLoss: string | ObjectID | ChartOfAccount;

}

export const productCategorySchema = SchemaFactory.createForClass(ProductCategory);
