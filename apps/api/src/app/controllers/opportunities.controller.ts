import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Opportunity } from '../models/opportunity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Opportunities')
@Controller('opportunities')
export class OpportunitiesController extends ReadController<Opportunity> {
  constructor(@InjectModel(Opportunity.name) model) { super(model); }
}
