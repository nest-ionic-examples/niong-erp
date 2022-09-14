import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { RelatedStatus } from '../models/related-status';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Related Statuses')
@Controller('related-statuses')
export class RelatedStatusesController extends ReadController<RelatedStatus> {
  constructor(@InjectModel(RelatedStatus.name) model) { super(model); }
}
