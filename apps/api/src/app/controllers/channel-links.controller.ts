import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ChannelLink } from '../models/channel-link';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channel Links')
@Controller('channel-links')
export class ChannelLinksController extends ReadController<ChannelLink> {
  constructor(@InjectModel(ChannelLink.name) model) { super(model); }
}
