import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from '../models/employee';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController extends ReadController<Employee> {
  constructor(@InjectModel(Employee.name) model) { super(model); }
}
