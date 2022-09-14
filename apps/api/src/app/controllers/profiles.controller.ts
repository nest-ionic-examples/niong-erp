import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from '../models/profile';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Profiles')
@Controller('profiles')
export class ProfilesController extends ReadController<Profile> {
  constructor(@InjectModel(Profile.name) model) { super(model); }
}
