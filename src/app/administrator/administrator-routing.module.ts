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

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'details', component: OrderDetailsComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'manage-admin', component: ManageAdminComponent },
  {
    path: 'products',
    children: [
      { path: '', redirectTo: '/administrator/products/listing', pathMatch: 'full' },
      { path: 'listing', component: ProductsComponent },
      { path: 'add', component: ProductsFormComponent },
      { path: 'edit/:id', component: ProductsFormComponent },
    ],
  },
  { path: 'product-variations', component: ProductSpecificationsComponent },
  {
    path: 'product-categories',
    component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
