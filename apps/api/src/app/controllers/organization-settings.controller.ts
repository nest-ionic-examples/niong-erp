import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { OrganizationSetting } from '../models/organization-setting';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Organization Settings')
@Controller('organization-settings')
export class OrganizationSettingsController extends ReadController<OrganizationSetting> {
  constructor(@InjectModel(OrganizationSetting.name) model) { super(model); }
}
