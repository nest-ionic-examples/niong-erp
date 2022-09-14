import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ExpenseCategory } from '../models/expense-category';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Expense Categories')
@Controller('expense-categories')
export class ExpenseCategoriesController extends ReadController<ExpenseCategory> {
  constructor(@InjectModel(ExpenseCategory.name) model) { super(model); }
}
