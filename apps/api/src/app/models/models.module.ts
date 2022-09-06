import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsCategories, AccountsCategoriesSchema } from './accounts-categories';
import { AccountType, AccountTypeSchema } from './account-type';
import { BillOfMaterial, BillOfMaterialSchema } from './bill-of-material';
import { BonusType, BonusTypeSchema } from './bonus-type';

const providers = MongooseModule.forFeature([
  {name: AccountsCategories.name, schema: AccountsCategoriesSchema},
  {name: AccountType.name, schema: AccountTypeSchema},
  {name: BillOfMaterial.name, schema: BillOfMaterialSchema},
  {name: BonusType.name, schema: BonusTypeSchema},
]).providers;

@Module({
  providers,
  exports: providers,
})
export class ModelsModule {
}
