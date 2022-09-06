import { ActionBy } from './action-by';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import ObjectId = Types.ObjectId

export class AccountsCategories {
  _id: ObjectId;

  @Prop({default: 'All'})
  name: string;

  @Prop({default: 'All'})
  fullName: string;

  @Prop({ref: 'AccountsCategory', default: null})
  parent: ObjectId;

  @Prop({default: null})
  child: ObjectId[];

  @Prop({ref: 'Users', default: null})
  users: ObjectId[];

  @Prop()
  createdBy: ActionBy;

  @Prop()
  editedBy: ActionBy;

  @Prop({default: 0})
  nestingLevel: number;

  @Prop({default: 0})
  sequence: number;

  @Prop({default: false})
  main: boolean;

  @Prop({default: true})
  removable: boolean;

  @Prop({default: 0})
  productsCount: number;

}

export const AccountsCategoriesSchema = SchemaFactory.createForClass(AccountsCategories);
