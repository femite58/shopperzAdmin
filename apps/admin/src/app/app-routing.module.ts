import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AdminSharedModule } from 'admin-shared';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductSpecificationsComponent } from './pages/product-specifications/product-specifications.component';
import { SharedModule } from 'shared';
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

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'orders',
        children: [
          { path: '', component: OrdersComponent },
          { path: 'details/:id', component: OrderDetailsComponent },
        ],
      },
      {
        path: 'notifications',
        redirectTo: '/notifications/admin',
        pathMatch: 'full',
      },
      {
        path: 'notifications/:tab',
        component: NotificationManagerComponent,
        children: [
          { path: '', component: NotificationsListingComponent },
          { path: 'details/:id', component: NotificationDetailsComponent },
        ],
      },

      // { path: 'order', component: OrderDetailsComponent },
      { path: 'stores', component: StoresComponent },
      {
        path: 'sales-promotion',
        redirectTo: '/sales-promotion/coupons',
        pathMatch: 'full',
      },
      { path: 'sales-promotion/:tab', component: SalesPromoComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'manage-admins', component: ManageAdminComponent },
      { path: 'manage-admins/details/:id', component: AdminDetailsComponent },
      {
        path: 'products',
        children: [
          {
            path: '',
            redirectTo: 'listing',
            pathMatch: 'full',
          },
          { path: 'listing', component: ProductsComponent },
          { path: 'details/:id', component: ProductDetailsComponent },
          { path: 'add', component: ProductsFormComponent },
          { path: 'edit/:id', component: ProductsFormComponent },
        ],
      },
      { path: 'product-variations', component: ProductSpecificationsComponent },
      {
        path: 'product-categories',
        component: CategoriesComponent,
      },
      {
        path: 'general-settings',
        component: GeneralSettingsComponent,
        children: [
          { path: '', redirectTo: 'company-info', pathMatch: 'full' },
          { path: 'company-info', component: CompanyInfoComponent },
          { path: 'customization', component: CustomizationComponent },
          { path: 'app-settings', component: AppSettingsComponent },
          { path: 'banners', component: BannersComponent },
        ],
      },
      {
        path: 'account-settings',
        component: AccSettingsComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ProfileComponent },
          { path: 'password', component: PasswordComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
