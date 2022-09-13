import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillOfMaterial, billOfMaterialSchema } from './billOfMaterial';
import { BonusType, bonusTypeSchema } from './bonusType';
import { AccountCategory, AccountCategorySchema } from './accountsCategories';
import { AccountType, AccountTypeSchema } from './accountTypes';
import { Birthday, birthdaysSchema } from './birthday';

const providers = MongooseModule.forFeature([
  {name: AccountCategory.name, schema: AccountCategorySchema},
  {name: AccountType.name, schema: AccountTypeSchema},
  {name: BillOfMaterial.name, schema: billOfMaterialSchema},
  {name: Birthday.name, schema: birthdaysSchema},
  {name: BonusType.name, schema: bonusTypeSchema},
]).providers;

@Module({
  providers,
  exports: providers,
})
export class ModelsModule {
}
