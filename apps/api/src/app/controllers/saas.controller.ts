import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Saas } from '../models/saas';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Saas')
@Controller('saas')
export class SaasController extends ReadController<Saas> {
  constructor(@InjectModel(Saas.name) model) { super(model); }
}
