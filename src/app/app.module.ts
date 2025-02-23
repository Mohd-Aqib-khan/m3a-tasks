import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityCardComponent } from './shared/component/entity-card/entity-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskSecondComponent } from './component/task-second/task-second.component';
import { OrganizationTreeComponent } from './shared/component/organization-tree/organization-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityCardComponent,
    TaskOneComponent,
    TaskSecondComponent,
    OrganizationTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
