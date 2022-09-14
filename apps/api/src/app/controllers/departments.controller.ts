import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Department } from '../models/department';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController extends ReadController<Department> {
  constructor(@InjectModel(Department.name) model) { super(model); }
}
