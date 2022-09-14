import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Birthday } from '../models/birthday';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Birthdays')
@Controller('birthdays')
export class BirthdaysController extends ReadController<Birthday> {
  constructor(@InjectModel(Birthday.name) model) { super(model); }
}
