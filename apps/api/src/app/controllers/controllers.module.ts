import { Module } from '@nestjs/common';
import { ModelsModule } from '../models/models.module';
import { AccountCategoriesController } from './account-categories.controller';
import { AccountTypesController } from './account-types.controller';
import { BillOfMaterialsController } from './bill-of-materials.controller';
import { BirthdaysController } from './birthdays.controller';
import { BonusTypesController } from './bonus-types.controller';
import { BrandsController } from './brands.controller';
import { CampaignsController } from './campaigns.controller';
import { CapacitiesController } from './capacities.controller';
import { CashTransfersController } from './cash-transfers.controller';
import { ChannelLinksController } from './channel-links.controller';
import { ChartAccountsController } from './chart-accounts.controller';
import { CountriesController } from './countries.controller';
import { CurrenciesController } from './currencies.controller';
import { CurrencyStoresController } from './currency-stores.controller';
import { CustomChartsController } from './custom-charts.controller';
import { CustomDashboardsController } from './custom-dashboards.controller';
import { CustomReportsController } from './custom-reports.controller';
import { CustomersController } from './customers.controller';
import { DealTasksController } from './deal-tasks.controller';
import { DegreesController } from './degrees.controller';
import { DeliverTosController } from './deliver-tos.controller';
import { DepartmentsController } from './departments.controller';
import { DestinationsController } from './destinations.controller';
import { EmployeesController } from './employees.controller';
import { ErpModulesController } from './erp-modules.controller';
import { ExpenseCategoriesController } from './expense-categories.controller';
import { FollowersController } from './followers.controller';
import { GoodsNotesController } from './goods-notes.controller';
import { HistoriesController } from './histories.controller';
import { HolidaysController } from './holidays.controller';
import { HoursCashesController } from './hours-cashes.controller';
import { ImagesController } from './images.controller';
import { ImportHistoriesController } from './import-histories.controller';
import { ImportsController } from './imports.controller';
import { IncotermsController } from './incoterms.controller';
import { IndustriesController } from './industries.controller';
import { IntegrationsController } from './integrations.controller';
import { InvoicesController } from './invoices.controller';
import { InvoicingControlsController } from './invoicing-controls.controller';
import { JobPositionsController } from './job-positions.controller';
import { JobTypesController } from './job-types.controller';
import { JobsController } from './jobs.controller';
import { JournalEntriesController } from './journal-entries.controller';
import { JournalsController } from './journals.controller';
import { LanguagesController } from './languages.controller';
import { LocationsController } from './locations.controller';
import { MagentoDataController } from './magento-data.controller';
import { ManufacturingOrdersController } from './manufacturing-orders.controller';
import { MatchMagentosController } from './match-magentos.controller';
import { MonthHoursController } from './month-hours.controller';
import { NationalitiesController } from './nationalities.controller';
import { OpportunitiesController } from './opportunities.controller';
import { OrderRowsController } from './order-rows.controller';
import { OrdersController } from './orders.controller';
import { OrganizationSettingsController } from './organization-settings.controller';
import { PayRollsController } from './pay-rolls.controller';
import { PaymentMethodsController } from './payment-methods.controller';
import { PaymentTermsController } from './payment-terms.controller';
import { PaymentTypesController } from './payment-types.controller';
import { PaymentsController } from './payments.controller';
import { PayrollComponentTypesController } from './payroll-component-types.controller';
import { PayrollStructureTypesController } from './payroll-structure-types.controller';
import { PeriodsController } from './periods.controller';
import { PriceListsController } from './price-lists.controller';
import { PrioritiesController } from './priorities.controller';
import { ProductAvailabilitiesController } from './product-availabilities.controller';
import { ProductCategoriesController } from './product-categories.controller';
import { ProductOptionValuesController } from './product-option-values.controller';
import { ProductOptionsController } from './product-options.controller';
import { ProductPricesController } from './product-prices.controller';
import { ProductTypesController } from './product-types.controller';
import { ProductsController } from './products.controller';
import { ProfilesController } from './profiles.controller';
import { ProjectMembersController } from './project-members.controller';
import { ProjectPositionsController } from './project-positions.controller';
import { ProjectTypesController } from './project-types.controller';
import { ProjectsController } from './projects.controller';
import { QuotationsController } from './quotations.controller';
import { RatesController } from './rates.controller';
import { RelatedStatusesController } from './related-statuses.controller';
import { ReservationNotesController } from './reservation-notes.controller';
import { RoutingsController } from './routings.controller';
import { SaasController } from './saas.controller';
import { SalariesController } from './salaries.controller';
import { SalaryCashesController } from './salary-cashes.controller';
import { SavedFiltersController } from './saved-filters.controller';
import { ScheduledPaysController } from './scheduled-pays.controller';
import { ShippingMethodsController } from './shipping-methods.controller';
import { SourcesController } from './sources.controller';
import { SyncLogsController } from './sync-logs.controller';
import { TagsController } from './tags.controller';
import { TasksController } from './tasks.controller';
import { TaxesController } from './taxes.controller';
import { TransfersController } from './transfers.controller';
import { UsersController } from './users.controller';
import { VacationCachesController } from './vacation-caches.controller';
import { VacationsController } from './vacations.controller';
import { WTrackPayOutsController } from './w-track-pay-outs.controller';
import { WTracksController } from './w-tracks.controller';
import { WarehousesController } from './warehouses.controller';
import { WeeklySchedulersController } from './weekly-schedulers.controller';
import { WorkCentresController } from './work-centres.controller';
import { WorkflowsController } from './workflows.controller';
import { ZonesController } from './zones.controller';

@Module({
  imports: [ModelsModule],
  controllers: [
    AccountCategoriesController,
    AccountTypesController,
    BillOfMaterialsController,
    BirthdaysController,
    BonusTypesController,
    BrandsController,
    CampaignsController,
    CapacitiesController,
    CashTransfersController,
    ChannelLinksController,
    ChartAccountsController,
    CountriesController,
    CurrenciesController,
    CurrencyStoresController,
    CustomChartsController,
    CustomDashboardsController,
    CustomReportsController,
    CustomersController,
    DealTasksController,
    DegreesController,
    DeliverTosController,
    DepartmentsController,
    DestinationsController,
    EmployeesController,
    ErpModulesController,
    ExpenseCategoriesController,
    FollowersController,
    GoodsNotesController,
    HistoriesController,
    HolidaysController,
    HoursCashesController,
    ImagesController,
    ImportHistoriesController,
    ImportsController,
    IncotermsController,
    IndustriesController,
    IntegrationsController,
    InvoicesController,
    InvoicingControlsController,
    JobPositionsController,
    JobTypesController,
    JobsController,
    JournalEntriesController,
    JournalsController,
    LanguagesController,
    LocationsController,
    MagentoDataController,
    ManufacturingOrdersController,
    MatchMagentosController,
    MonthHoursController,
    NationalitiesController,
    OpportunitiesController,
    OrderRowsController,
    OrdersController,
    OrganizationSettingsController,
    PayRollsController,
    PaymentMethodsController,
    PaymentTermsController,
    PaymentTypesController,
    PaymentsController,
    PayrollComponentTypesController,
    PayrollStructureTypesController,
    PeriodsController,
    PriceListsController,
    PrioritiesController,
    ProductAvailabilitiesController,
    ProductCategoriesController,
    ProductOptionValuesController,
    ProductOptionsController,
    ProductPricesController,
    ProductTypesController,
    ProductsController,
    ProfilesController,
    ProjectMembersController,
    ProjectPositionsController,
    ProjectTypesController,
    ProjectsController,
    QuotationsController,
    RatesController,
    RelatedStatusesController,
    ReservationNotesController,
    RoutingsController,
    SaasController,
    SalariesController,
    SalaryCashesController,
    SavedFiltersController,
    ScheduledPaysController,
    ShippingMethodsController,
    SourcesController,
    SyncLogsController,
    TagsController,
    TasksController,
    TaxesController,
    TransfersController,
    UsersController,
    VacationCachesController,
    VacationsController,
    WTrackPayOutsController,
    WTracksController,
    WarehousesController,
    WeeklySchedulersController,
    WorkCentresController,
    WorkflowsController,
    ZonesController,
  ],
})
export class ControllersModule {}
