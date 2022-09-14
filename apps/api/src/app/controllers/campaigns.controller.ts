import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign } from '../models/campaign';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignsController extends ReadController<Campaign> {
  constructor(@InjectModel(Campaign.name) model) { super(model); }
}
