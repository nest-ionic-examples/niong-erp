import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Zone } from '../models/zone';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Zones')
@Controller('zones')
export class ZonesController extends ReadController<Zone> {
  constructor(@InjectModel(Zone.name) model) { super(model); }
}
