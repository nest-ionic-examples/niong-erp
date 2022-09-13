import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseBooleanPipe implements PipeTransform {
  transform(value?: string) {
    return value && value === 'true';
  }
}
