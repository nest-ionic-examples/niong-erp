import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { DeliverTo } from '../models/deliver-to';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deliver Tos')
@Controller('deliver-tos')
export class DeliverTosController extends ReadController<DeliverTo> {
  constructor(@InjectModel(DeliverTo.name) model) { super(model); }
}
