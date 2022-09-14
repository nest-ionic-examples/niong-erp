import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from '../models/payment';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController extends ReadController<Payment> {
  constructor(@InjectModel(Payment.name) model) { super(model); }
}
