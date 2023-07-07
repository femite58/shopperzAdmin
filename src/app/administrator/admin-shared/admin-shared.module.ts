import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { EmptyItemsComponent } from './components/empty-items/empty-items.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidemenuComponent,
    AdminHeaderComponent,
    EmptyItemsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutComponent, EmptyItemsComponent, SharedModule],
})
export class AdminSharedModule {}
