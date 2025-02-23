import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskSecondComponent } from './component/task-second/task-second.component';

@NgModule({
  declarations: [
    AppComponent,

    TaskOneComponent,
    TaskSecondComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
