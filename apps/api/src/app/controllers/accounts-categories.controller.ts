import { Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReadController } from './core/read.controller';
import { AccountCategory } from '../models/accountsCategories';

@Controller('accounts-categories')
export class AccountsCategoriesController extends ReadController<AccountCategory> {
  constructor(@InjectModel(AccountCategory.name) model) { super(model); }
}
