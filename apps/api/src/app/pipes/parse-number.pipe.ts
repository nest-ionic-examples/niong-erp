import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseNumberPipe implements PipeTransform {
  transform(value?: string) {
    return value && Number(value);
  }
}
