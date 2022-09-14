import { Get, Query } from '@nestjs/common';
import { ParseOptionalIntPipe } from '../pipes/parse-optional-int.pipe';
import mongoose, { FilterQuery, Model } from 'mongoose';

export interface Page<T> {
  number: number;
  size: number;
  total: number;
  items: T[];
}

export class FindController<T> {

  protected constructor(protected model: Model<T>) {}

  @Get()
  async find(@Query('$page', ParseOptionalIntPipe) number = 1,
             @Query('$size', ParseOptionalIntPipe) size = 20,
             @Query('$sort') sort = '',
             where: FilterQuery<T> = {}): Promise<T | T[] | Page<T>> {
    if (size === 1) {
      return this.model.findOne(where);
    }

    let query: mongoose.Query<T[], T>;

    if (size >= 0) {
      query = this.model.find(where);
    }

    if (sort) {
      query.sort(sort)
    }

    if (size > 1) {
      query = query.limit(size);
      if (number) {
        query = query.skip((number - 1) * size);
        return {
          number,
          size,
          total: await this.model.find(where).count(),
          items: await query.exec(),
        };
      }
    }

    return query.exec();
  }
}
