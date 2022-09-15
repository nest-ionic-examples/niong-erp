import { Get, Param } from '@nestjs/common';
import { Model } from 'mongoose';

export abstract class FindByIdController<T> {

  protected constructor(protected model: Model<T>) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

}
