import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskSecondComponent } from './component/task-second/task-second.component';

const routes: Routes = [
  {path: "", redirectTo: "task1", pathMatch: "full"},
  {
    path: 'task1',
    component: TaskOneComponent
  },
  {
    path: 'task2',
    component: TaskSecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
