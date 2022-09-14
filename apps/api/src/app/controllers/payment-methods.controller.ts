import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentMethod } from '../models/payment-method';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment Methods')
@Controller('payment-methods')
export class PaymentMethodsController extends ReadController<PaymentMethod> {
  constructor(@InjectModel(PaymentMethod.name) model) { super(model); }
}
