import { Module } from '@nestjs/common';

import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsModule } from './models/models.module';
import { environment } from '../environments/environment';
import { AccountTypesController } from './controllers/account-types.controller';
import { AccountsCategoriesController } from './controllers/accounts-categories.controller';
import { BillOfMaterialsController } from './controllers/bill-of-materials.controller';
import { BonusTypesController } from './controllers/bonus-types.controller';
import { BirthdaysController } from './controllers/birthdays.controller';

mongoose.set('debug', true)

@Module({
  imports: [
    MongooseModule.forRoot(environment.db.url, {
      user: environment.db.user,
      pass: environment.db.pass
    }),
    ModelsModule,
  ],
  controllers: [
    AccountTypesController,
    AccountsCategoriesController,
    BillOfMaterialsController,
    BirthdaysController,
    BonusTypesController,
  ],
  providers: [],
})
export class AppModule {}
