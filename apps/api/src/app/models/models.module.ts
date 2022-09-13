import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillOfMaterial, billOfMaterialSchema } from './bill-of-material';
import { BonusType, bonusTypeSchema } from './bonus-type';
import { AccountCategory, accountCategorySchema } from './account-category';
import { AccountType, accountTypeSchema } from './account-type';
import { Birthday, birthdaysSchema } from './birthday';

const providers = MongooseModule.forFeature([
  {name: AccountCategory.name, schema: accountCategorySchema},
  {name: AccountType.name, schema: accountTypeSchema},
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
