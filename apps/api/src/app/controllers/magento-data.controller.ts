import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { MagentoData } from '../models/magento-data';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Magento Data')
@Controller('magento-data')
export class MagentoDataController extends ReadController<MagentoData> {
  constructor(@InjectModel(MagentoData.name) model) { super(model); }
}
