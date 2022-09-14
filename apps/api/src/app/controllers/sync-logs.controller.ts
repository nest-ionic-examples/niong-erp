import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { SyncLog } from '../models/sync-log';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sync Logs')
@Controller('sync-logs')
export class SyncLogsController extends ReadController<SyncLog> {
  constructor(@InjectModel(SyncLog.name) model) { super(model); }
}
