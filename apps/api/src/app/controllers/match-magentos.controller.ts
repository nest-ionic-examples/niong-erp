import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { MatchMagento } from '../models/match-magento';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Match Magentos')
@Controller('match-magentos')
export class MatchMagentosController extends ReadController<MatchMagento> {
  constructor(@InjectModel(MatchMagento.name) model) { super(model); }
}
