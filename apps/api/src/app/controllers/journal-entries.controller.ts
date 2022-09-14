import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { JournalEntry } from '../models/journal-entry';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Journal Entries')
@Controller('journal-entries')
export class JournalEntriesController extends ReadController<JournalEntry> {
  constructor(@InjectModel(JournalEntry.name) model) { super(model); }
}
