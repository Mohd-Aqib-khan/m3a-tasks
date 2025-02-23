import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTableComponent } from './component/custom-table/custom-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityCardComponent } from './component/entity-card/entity-card.component';
import { OrganizationTreeComponent } from './component/organization-tree/organization-tree.component';



@NgModule({
  declarations: [
    CustomTableComponent,
    EntityCardComponent,
    OrganizationTreeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CustomTableComponent,
    BrowserAnimationsModule,
    EntityCardComponent,
    OrganizationTreeComponent
  ]
})
export class SharedModule { }
