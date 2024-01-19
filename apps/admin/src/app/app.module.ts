import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'shared';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductSpecificationsComponent } from './pages/product-specifications/product-specifications.component';
import { ManageAdminComponent } from './pages/manage-admin/manage-admin.component';
import { AdminDetailsComponent } from './pages/admin-details/admin-details.component';
import { CouponComponent } from './pages/coupon/coupon.component';
import { NotificationManagerComponent } from './pages/notification-manager/notification-manager.component';
import { NotificationDetailsComponent } from './pages/notification-details/notification-details.component';
import { UserNotificationsDetailsComponent } from './pages/user-notifications-details/user-notifications-details.component';
import { GeneralSettingsComponent } from './pages/general-settings/general-settings.component';
import { CompanyInfoComponent } from './pages/general-settings/company-info/company-info.component';
import { CustomizationComponent } from './pages/general-settings/customization/customization.component';
import { AppSettingsComponent } from './pages/general-settings/app-settings/app-settings.component';
import { BannersComponent } from './pages/general-settings/banners/banners.component';
import { ImageUploadComponent } from './pages/general-settings/image-upload/image-upload.component';
import { SalesPromoComponent } from './pages/sales-promo/sales-promo.component';
import { AccSettingsComponent } from './pages/acc-settings/acc-settings.component';
import { PasswordComponent } from './pages/acc-settings/password/password.component';
import { ProfileComponent } from './pages/acc-settings/profile/profile.component';
import { NotificationsListingComponent } from './pages/notifications-listing/notifications-listing.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminSharedModule } from 'admin-shared';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    ProductsFormComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    CustomersComponent,
    CategoriesComponent,
    StoresComponent,
    ProductSpecificationsComponent,
    ManageAdminComponent,
    AdminDetailsComponent,
    CouponComponent,
    NotificationManagerComponent,
    NotificationDetailsComponent,
    UserNotificationsDetailsComponent,
    GeneralSettingsComponent,
    CompanyInfoComponent,
    CustomizationComponent,
    AppSettingsComponent,
    BannersComponent,
    ImageUploadComponent,
    SalesPromoComponent,
    AccSettingsComponent,
    PasswordComponent,
    ProfileComponent,
    NotificationsListingComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AdminSharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
