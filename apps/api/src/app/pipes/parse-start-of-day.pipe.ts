import { Injectable, PipeTransform } from '@nestjs/common';
import moment = require('moment');

@Injectable()
export class ParseStartOfDayPipe implements PipeTransform {
  transform(value?: string) {
    return value && moment.utc(value, 'Y-M-D').startOf('d').toDate() || null;
  }
}
