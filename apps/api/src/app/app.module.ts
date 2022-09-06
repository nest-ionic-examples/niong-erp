import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsModule } from './models/models.module';
import { environment } from '../environments/environment';
import { AccountTypesController } from './controllers/account-types.controller';
import { AccountsCategoriesController } from './controllers/accounts-categories.controller';
import { BillOfMaterialsController } from './controllers/bill-of-materials.controller';
import { BonusTypesController } from './controllers/bonus-types.controller';
import mongoose from 'mongoose';

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
    AppController,
    AccountTypesController,
    AccountsCategoriesController,
    BillOfMaterialsController,
    BonusTypesController,
  ],
  providers: [AppService],
})
export class AppModule {}
