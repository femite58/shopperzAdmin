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

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'customers', component: CustomersComponent },
  {
    path: 'product',
    children: [
      {
        path: '',
        redirectTo: '/administrator/product/listing',
        pathMatch: 'full',
      },
      { path: 'listing', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'add', component: ProductsFormComponent },
      { path: 'edit/:id', component: ProductsFormComponent },
      { path: 'specifications', component: ProductSpecificationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
