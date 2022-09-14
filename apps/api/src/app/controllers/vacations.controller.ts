import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Vacation } from '../models/vacation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vacations')
@Controller('vacations')
export class VacationsController extends ReadController<Vacation> {
  constructor(@InjectModel(Vacation.name) model) { super(model); }
}
