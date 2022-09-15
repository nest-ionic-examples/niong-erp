import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountCategory, accountCategorySchema } from './account-category';
import { AccountType, accountTypeSchema } from './account-type';
import { BillOfMaterial, billOfMaterialSchema } from './bill-of-material';
import { Birthday, birthdaySchema } from './birthday';
import { BonusType, bonusTypeSchema } from './bonus-type';
import { Brand, brandSchema } from './brand';
import { Campaign, campaignSchema } from './campaign';
import { Capacity, capacitySchema } from './capacity';
import { CashTransfer, cashTransferSchema } from './cash-transfer';
import { ChannelLink, channelLinkSchema } from './channel-link';
import { ChartOfAccount, chartAccountSchema } from './chart-of-account';
import { Country, countrySchema } from './country';
import { CurrencyStore, currencyStoreSchema } from './currency-store';
import { Currency, currencySchema } from './currency';
import { CustomChart, customChartSchema } from './custom-chart';
import { CustomDashboard, customDashboardSchema } from './custom-dashboard';
import { CustomReport, customReportSchema } from './custom-report';
import { Customer, customerSchema } from './customer';
import { DealTask, dealTaskSchema } from './deal-task';
import { Degree, degreeSchema } from './degree';
import { DeliverTo, deliverToSchema } from './deliver-to';
import { Department, departmentSchema } from './department';
import { Destination, destinationSchema } from './destination';
import { Employee, employeeSchema } from './employee';
import { ErpModule, erpModuleSchema } from './erpModule';
import { ExpenseCategory, expenseCategorySchema } from './expense-category';
import { Follower, followerSchema } from './follower';
import { GoodsNote, goodsNoteSchema } from './goods-note';
import { History, historySchema } from './history';
import { Holiday, holidaySchema } from './holiday';
import { HoursCash, hoursCashSchema } from './hours-cash';
import { Image, imageSchema } from './image';
import { ImportHistory, importHistorySchema } from './import-history';
import { Import, importSchema } from './import';
import { Incoterm, incotermSchema } from './incoterm';
import { Industry, industrySchema } from './industry';
import { Integration, integrationsSchema } from './integration';
import { Invoice, invoiceSchema } from './invoice';
import { InvoicingControl, invoicingControlSchema } from './invoicing-control';
import { JobPosition, jobPositionSchema } from './job-position';
import { JobType, jobTypeSchema } from './job-type';
import { Job, jobsSchema } from './job';
import { JournalEntry, journalEntrySchema } from './journal-entry';
import { Journal, journalSchema } from './journal';
import { Language, languageSchema } from './language';
import { Location, locationsSchema } from './location';
import { MagentoData, magentoDataSchema } from './magento-data';
import { ManufacturingOrder, manufacturingOrderSchema } from './manufacturing-order';
import { MatchMagento, matchMagentoSchema } from './match-magento';
import { MonthHours, monthHoursSchema } from './month-hours';
import { Nationality, nationalitySchema } from './nationality';
import { Opportunity, opportunitySchema } from './opportunity';
import { OrderRow, orderRowSchema } from './order-row';
import { Order, orderSchema } from './order';
import { OrganizationSetting, organizationSettingSchema } from './organization-setting';
import { PayRoll, payRollSchema } from './pay-roll';
import { PaymentMethod, paymentMethodSchema } from './payment-method';
import { PaymentTerm, paymentTermSchema } from './payment-term';
import { PaymentType, paymentTypeSchema } from './payment-type';
import { Payment, paymentSchema } from './payment';
import { PayrollComponentType, payrollComponentTypeSchema } from './payroll-component-type';
import { PayrollStructureType, payrollStructureTypeSchema } from './payroll-structure-type';
import { Period, periodSchema } from './period';
import { PriceList, priceListSchema } from './price-list';
import { Priority, prioritySchema } from './priority';
import { ProductAvailability, productAvailabilitySchema } from './product-availability';
import { ProductCategory, productCategorySchema } from './product-category';
import { ProductOptionValue, productOptionValueSchema } from './product-option-value';
import { ProductOption, productOptionSchema } from './product-option';
import { ProductPrices, productPricesSchema } from './product-prices';
import { ProductType, productTypeSchema } from './product-type';
import { Product, productSchema } from './product';
import { Profile, profileSchema } from './profile';
import { ProjectMember, projectMemberSchema } from './project-member';
import { ProjectPosition, projectPositionSchema } from './project-position';
import { ProjectType, projectTypeSchema } from './project-type';
import { Project, projectSchema } from './project';
import { Quotation, quotationSchema } from './quotation';
import { Rate, rateSchema } from './rate';
import { RelatedStatus, relatedStatusSchema } from './related-status';
import { ReservationNote, reservationNoteSchema } from './reservation-note';
import { Routing, routingSchema } from './routing';
import { Saas, saasSchema } from './saas';
import { SalaryCash, salaryCashSchema } from './salary-cash';
import { Salary, salarySchema } from './salary';
import { SavedFilter, savedFilterSchema } from './saved-filter';
import { ScheduledPay, scheduledPaySchema } from './scheduled-pay';
import { ShippingMethod, shippingMethodSchema } from './shipping-method';
import { Source, sourceSchema } from './source';
import { SyncLog, syncLogSchema } from './sync-log';
import { Tag, tagSchema } from './tag';
import { Task, taskSchema } from './task';
import { Tax, taxSchema } from './tax';
import { Transfer, transferSchema } from './transfer';
import { User, userSchema } from './user';
import { VacationCache, vacationCacheSchema } from './vacation-cache';
import { Vacation, vacationSchema } from './vacation';
import { WTrackPayOut, wTrackPayOutSchema } from './w-track-pay-out';
import { WTrack, wTrackSchema } from './w-track';
import { Warehouse, warehouseSchema } from './warehouse';
import { WeeklyScheduler, weeklySchedulerSchema } from './weekly-scheduler';
import { WorkCentre, workCentreSchema } from './work-centre';
import { Workflow, workflowSchema } from './workflow';
import { Zone, zoneSchema } from './zone';

const providers = MongooseModule.forFeature([
  {name: AccountCategory.name, schema: accountCategorySchema},
  {name: AccountType.name, schema: accountTypeSchema},
  {name: BillOfMaterial.name, schema: billOfMaterialSchema},
  {name: Birthday.name, schema: birthdaySchema},
  {name: BonusType.name, schema: bonusTypeSchema},
  {name: Brand.name, schema: brandSchema},
  {name: Campaign.name, schema: campaignSchema},
  {name: Capacity.name, schema: capacitySchema},
  {name: CashTransfer.name, schema: cashTransferSchema},
  {name: ChannelLink.name, schema: channelLinkSchema},
  {name: ChartOfAccount.name, schema: chartAccountSchema},
  {name: Country.name, schema: countrySchema},
  {name: CurrencyStore.name, schema: currencyStoreSchema},
  {name: Currency.name, schema: currencySchema},
  {name: CustomChart.name, schema: customChartSchema},
  {name: CustomDashboard.name, schema: customDashboardSchema},
  {name: CustomReport.name, schema: customReportSchema},
  {name: Customer.name, schema: customerSchema},
  {name: DealTask.name, schema: dealTaskSchema},
  {name: Degree.name, schema: degreeSchema},
  {name: DeliverTo.name, schema: deliverToSchema},
  {name: Department.name, schema: departmentSchema},
  {name: Destination.name, schema: destinationSchema},
  {name: Employee.name, schema: employeeSchema},
  {name: ErpModule.name, schema: erpModuleSchema},
  {name: ExpenseCategory.name, schema: expenseCategorySchema},
  {name: Follower.name, schema: followerSchema},
  {name: GoodsNote.name, schema: goodsNoteSchema},
  {name: History.name, schema: historySchema},
  {name: Holiday.name, schema: holidaySchema},
  {name: HoursCash.name, schema: hoursCashSchema},
  {name: Image.name, schema: imageSchema},
  {name: ImportHistory.name, schema: importHistorySchema},
  {name: Import.name, schema: importSchema},
  {name: Incoterm.name, schema: incotermSchema},
  {name: Industry.name, schema: industrySchema},
  {name: Integration.name, schema: integrationsSchema},
  {name: Invoice.name, schema: invoiceSchema},
  {name: InvoicingControl.name, schema: invoicingControlSchema},
  {name: JobPosition.name, schema: jobPositionSchema},
  {name: JobType.name, schema: jobTypeSchema},
  {name: Job.name, schema: jobsSchema},
  {name: JournalEntry.name, schema: journalEntrySchema},
  {name: Journal.name, schema: journalSchema},
  {name: Language.name, schema: languageSchema},
  {name: Location.name, schema: locationsSchema},
  {name: MagentoData.name, schema: magentoDataSchema},
  {name: ManufacturingOrder.name, schema: manufacturingOrderSchema},
  {name: MatchMagento.name, schema: matchMagentoSchema},
  {name: MonthHours.name, schema: monthHoursSchema},
  {name: Nationality.name, schema: nationalitySchema},
  {name: Opportunity.name, schema: opportunitySchema},
  {name: OrderRow.name, schema: orderRowSchema},
  {name: Order.name, schema: orderSchema},
  {name: OrganizationSetting.name, schema: organizationSettingSchema},
  {name: PayRoll.name, schema: payRollSchema},
  {name: PaymentMethod.name, schema: paymentMethodSchema},
  {name: PaymentTerm.name, schema: paymentTermSchema},
  {name: PaymentType.name, schema: paymentTypeSchema},
  {name: Payment.name, schema: paymentSchema},
  {name: PayrollComponentType.name, schema: payrollComponentTypeSchema},
  {name: PayrollStructureType.name, schema: payrollStructureTypeSchema},
  {name: Period.name, schema: periodSchema},
  {name: PriceList.name, schema: priceListSchema},
  {name: Priority.name, schema: prioritySchema},
  {name: ProductAvailability.name, schema: productAvailabilitySchema},
  {name: ProductCategory.name, schema: productCategorySchema},
  {name: ProductOptionValue.name, schema: productOptionValueSchema},
  {name: ProductOption.name, schema: productOptionSchema},
  {name: ProductPrices.name, schema: productPricesSchema},
  {name: ProductType.name, schema: productTypeSchema},
  {name: Product.name, schema: productSchema},
  {name: Profile.name, schema: profileSchema},
  {name: ProjectMember.name, schema: projectMemberSchema},
  {name: ProjectPosition.name, schema: projectPositionSchema},
  {name: ProjectType.name, schema: projectTypeSchema},
  {name: Project.name, schema: projectSchema},
  {name: Quotation.name, schema: quotationSchema},
  {name: Rate.name, schema: rateSchema},
  {name: RelatedStatus.name, schema: relatedStatusSchema},
  {name: ReservationNote.name, schema: reservationNoteSchema},
  {name: Routing.name, schema: routingSchema},
  {name: Saas.name, schema: saasSchema},
  {name: SalaryCash.name, schema: salaryCashSchema},
  {name: Salary.name, schema: salarySchema},
  {name: SavedFilter.name, schema: savedFilterSchema},
  {name: ScheduledPay.name, schema: scheduledPaySchema},
  {name: ShippingMethod.name, schema: shippingMethodSchema},
  {name: Source.name, schema: sourceSchema},
  {name: SyncLog.name, schema: syncLogSchema},
  {name: Tag.name, schema: tagSchema},
  {name: Task.name, schema: taskSchema},
  {name: Tax.name, schema: taxSchema},
  {name: Transfer.name, schema: transferSchema},
  {name: User.name, schema: userSchema},
  {name: VacationCache.name, schema: vacationCacheSchema},
  {name: Vacation.name, schema: vacationSchema},
  {name: WTrackPayOut.name, schema: wTrackPayOutSchema},
  {name: WTrack.name, schema: wTrackSchema},
  {name: Warehouse.name, schema: warehouseSchema},
  {name: WeeklyScheduler.name, schema: weeklySchedulerSchema},
  {name: WorkCentre.name, schema: workCentreSchema},
  {name: Workflow.name, schema: workflowSchema},
  {name: Zone.name, schema: zoneSchema},
]).providers;

@Module({
  providers,
  exports: providers,
})
export class ModelsModule {
}
