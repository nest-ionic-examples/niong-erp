import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { GoodsNote } from '../models/goods-note';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Goods Notes')
@Controller('goods-notes')
export class GoodsNotesController extends ReadController<GoodsNote> {
  constructor(@InjectModel(GoodsNote.name) model) { super(model); }
}
