import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Follower } from '../models/follower';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Followers')
@Controller('followers')
export class FollowersController extends ReadController<Follower> {
  constructor(@InjectModel(Follower.name) model) { super(model); }
}
