import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'expensesCategories'})
export class ExpenseCategory {
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
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
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

export const expenseCategorySchema = SchemaFactory.createForClass(ExpenseCategory);








