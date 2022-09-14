import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Integrations } from '../models/integrations';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Integrations')
@Controller('integrations')
export class IntegrationsController extends ReadController<Integrations> {
  constructor(@InjectModel(Integrations.name) model) { super(model); }
}
