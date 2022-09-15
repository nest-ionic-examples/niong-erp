import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Integration } from '../models/integration';
import { ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';

@ApiTags('Integrations')
@Controller('integrations')
export class IntegrationsController extends ReadController<Integration> {
  constructor(@InjectModel(Integration.name) model: Model<Integration>) { super(model); }
}
