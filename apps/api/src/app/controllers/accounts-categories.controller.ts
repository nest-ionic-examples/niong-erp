import { Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountsCategories } from '../models/accounts-categories';
import { ReadController } from './core/read.controller';

@Controller('accounts-categories')
export class AccountsCategoriesController extends ReadController<AccountsCategories> {
  constructor(@InjectModel(AccountsCategories.name) model) { super(model); }
}
