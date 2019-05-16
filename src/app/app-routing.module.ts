import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'employeelist', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
