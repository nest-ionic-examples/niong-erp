import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { AccountCategory } from '../models/account-category';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account Categories')
@Controller('account-categories')
export class AccountCategoriesController extends ReadController<AccountCategory> {
  constructor(@InjectModel(AccountCategory.name) model) { super(model); }
}
