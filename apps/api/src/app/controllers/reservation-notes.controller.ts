import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationNote } from '../models/reservation-note';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reservation Notes')
@Controller('reservation-notes')
export class ReservationNotesController extends ReadController<ReservationNote> {
  constructor(@InjectModel(ReservationNote.name) model) { super(model); }
}
