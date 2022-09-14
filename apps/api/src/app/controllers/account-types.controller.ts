import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { AccountType } from '../models/account-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account Types')
@Controller('account-types')
export class AccountTypesController extends ReadController<AccountType> {
  constructor(@InjectModel(AccountType.name) model) { super(model); }
}
