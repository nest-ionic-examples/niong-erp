import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController extends ReadController<User> {
  constructor(@InjectModel(User.name) model) { super(model); }
}
