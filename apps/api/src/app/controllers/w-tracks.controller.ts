import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { WTrack } from '../models/w-track';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('W Tracks')
@Controller('w-tracks')
export class WTracksController extends ReadController<WTrack> {
  constructor(@InjectModel(WTrack.name) model) { super(model); }
}
