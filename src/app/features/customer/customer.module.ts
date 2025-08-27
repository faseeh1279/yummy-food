import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';


const routes: Routes = [
  { 
    path: "customer-dashboard", 
    component: CustomerDashboardComponent, 
  }
];

@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ], 
  exports: [ 
    RouterModule
  ]
})

export class CustomerModule { }
