import { FindController } from './find.controller';
import { Get, Param } from '@nestjs/common';
import { FindByIdController } from './find-by-id.controller';
import { Model } from 'mongoose';

export abstract class ReadController<T> extends FindController<T> {

  protected constructor(protected model: Model<T>) {
    super(model);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<T> {
    return FindByIdController.prototype.findById.apply(this, [id]);
  }

}
