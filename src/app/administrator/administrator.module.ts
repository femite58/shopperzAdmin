import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductSpecificationsComponent } from './pages/product-specifications/product-specifications.component';
import { SharedModule } from '../shared/shared.module';
import { ManageAdminComponent } from './pages/manage-admin/manage-admin.component';

@NgModule({
  declarations: [
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
  ],
  imports: [CommonModule, AdminSharedModule, AdministratorRoutingModule, SharedModule],
})
export class AdministratorModule {}
