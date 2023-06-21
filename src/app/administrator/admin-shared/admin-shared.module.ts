import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, SidemenuComponent, AdminHeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutComponent],
})
export class AdminSharedModule {}
