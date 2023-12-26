import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { StoresComponent } from './pages/stores/stores.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductSpecificationsComponent } from './pages/product-specifications/product-specifications.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ManageAdminComponent } from './pages/manage-admin/manage-admin.component';
import { AdminDetailsComponent } from './pages/admin-details/admin-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CouponComponent } from './pages/coupon/coupon.component';
import { NotificationManagerComponent } from './pages/notification-manager/notification-manager.component';
import { NotificationDetailsComponent } from './pages/notification-details/notification-details.component';
import { UserNotificationsDetailsComponent } from './pages/user-notifications-details/user-notifications-details.component';
import { SalesPromoComponent } from './pages/sales-promo/sales-promo.component';
import { AccSettingsComponent } from './pages/acc-settings/acc-settings.component';
import { GenSettingsComponent } from './pages/gen-settings/gen-settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'orders',
    children: [
      { path: '', component: OrdersComponent },
      { path: 'details/:id', component: OrderDetailsComponent },
    ],
  },
  {
    path: 'admin',
    children: [
      { path: '', component: ManageAdminComponent },
      { path: 'details/:id', component: AdminDetailsComponent },
    ],
  },
  { path: 'notifications', component: NotificationManagerComponent },
  {
    path: 'notifications/admin',
    children: [
      { path: '', component: NotificationManagerComponent },
      { path: 'details/:id', component: NotificationDetailsComponent },
    ],
  },
  {
    path: 'notifications/user',
    children: [
      { path: '', component: NotificationManagerComponent },
      { path: 'details/:id', component: UserNotificationsDetailsComponent },
    ],
  },
  // { path: 'order', component: OrderDetailsComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'sales-promotion', component: SalesPromoComponent },
  { path: 'customers', component: CustomersComponent },
  // { path: 'manage-admins', component: ManageAdminComponent },
  // { path: 'admin-details', component: AdminDetailsComponent },
  {
    path: 'products',
    children: [
      {
        path: '',
        redirectTo: '/administrator/products/listing',
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
    path: 'settings',
    children: [
      { path: 'account', component: AccSettingsComponent },
      { path: 'general', component: GenSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
