import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentType } from '../models/payment-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment Types')
@Controller('payment-types')
export class PaymentTypesController extends ReadController<PaymentType> {
  constructor(@InjectModel(PaymentType.name) model) { super(model); }
}
