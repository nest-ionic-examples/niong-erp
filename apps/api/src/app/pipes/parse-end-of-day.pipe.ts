import { Injectable, PipeTransform } from '@nestjs/common';
import moment = require('moment');

@Injectable()
export class ParseEndOfDayPipe implements PipeTransform {
  transform(value: string) {
    return value && moment.utc(value, 'Y-M-D').endOf('d').toDate() || null;
  }
}
