import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Language } from '../models/language';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController extends ReadController<Language> {
  constructor(@InjectModel(Language.name) model) { super(model); }
}
