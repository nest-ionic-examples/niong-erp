import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from '../models/country';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController extends ReadController<Country> {
  constructor(@InjectModel(Country.name) model) { super(model); }
}
