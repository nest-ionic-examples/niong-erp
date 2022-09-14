import { Module } from '@nestjs/common';

import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsModule } from './models/models.module';
import { environment } from '../environments/environment';
import { ControllersModule } from './controllers/controllers.module';

mongoose.set('debug', true)

@Module({
  imports: [
    MongooseModule.forRoot(environment.db.url, {
      user: environment.db.user,
      pass: environment.db.pass
    }),
    ModelsModule,
    ControllersModule,
  ],
  providers: [],
})
export class AppModule {}
