import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ErpModule } from '../models/erpModule';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Erp Modules')
@Controller('erp-modules')
export class ErpModulesController extends ReadController<ErpModule> {
  constructor(@InjectModel(ErpModule.name) model) { super(model); }
}
