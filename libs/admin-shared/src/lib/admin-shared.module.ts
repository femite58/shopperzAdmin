import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { EmptyItemsComponent } from './components/empty-items/empty-items.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { PaginationParentComponent } from './components/pagination-parent/pagination-parent.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [
    LayoutComponent,
    SidemenuComponent,
    AdminHeaderComponent,
    EmptyItemsComponent,
    PaginationParentComponent,
    FileUploadComponent,
    PageHeadComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    LayoutComponent,
    SidemenuComponent,
    AdminHeaderComponent,
    EmptyItemsComponent,
    PaginationParentComponent,
    FileUploadComponent,
    PageHeadComponent,
  ]
})
export class AdminSharedModule {}
