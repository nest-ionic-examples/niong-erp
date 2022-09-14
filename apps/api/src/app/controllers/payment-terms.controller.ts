import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentTerm } from '../models/payment-term';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment Terms')
@Controller('payment-terms')
export class PaymentTermsController extends ReadController<PaymentTerm> {
  constructor(@InjectModel(PaymentTerm.name) model) { super(model); }
}
