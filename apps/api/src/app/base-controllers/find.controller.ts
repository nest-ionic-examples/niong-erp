import { BadRequestException, Get, Query } from '@nestjs/common';
import { ParseOptionalIntPipe } from '../pipes/parse-optional-int.pipe';
import mongoose, { FilterQuery, Model } from 'mongoose';
import { ApiQuery } from '@nestjs/swagger';

export interface Page<T> {
  number: number;
  size: number;
  total: number;
  items: T[];
}

export abstract class FindController<T> {

  protected constructor(protected model: Model<T>) {}

  @Get()
  @ApiQuery({name: '$page', type: 'number', required: false})
  @ApiQuery({name: '$size', type: 'number', required: false})
  @ApiQuery({name: '$select', type: 'string', required: false})
  @ApiQuery({name: '$expand', type: 'string', required: false})
  @ApiQuery({name: '$sort', type: 'string', required: false})
  async find(@Query('$page', ParseOptionalIntPipe) page = 1,
             @Query('$size', ParseOptionalIntPipe) size = 20,
             @Query('$select') select = '',
             @Query('$expand') expand = '',
             @Query('$sort') sort = '',
             where: FilterQuery<T> = {}): Promise<T | T[] | Page<T>> {
    if (size === 1) {
      return this.model.findOne(where);
    }

    let query: mongoose.Query<T[], T>;

    if (size >= 0) query = this.model.find(where);
    else throw new BadRequestException("'size` param should be greater than or equal to 0");

    if (select) query.select(select);

    if (expand) query.populate(expand)

    if (sort) query.sort(sort)

    if (size > 1) {
      query = query.limit(size);
      if (page) {
        query = query.skip((page - 1) * size);
        return {
          number: page,
          size,
          total: await this.model.find(where).count(),
          items: await query.exec(),
        };
      }
    }

    return query.exec();
  }
}
