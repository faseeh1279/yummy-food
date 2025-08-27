import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "admin-dashboard",
    pathMatch: "full"
  },
  { 
    path: "admin-dashboard", 
    component: AdminDashboardComponent, 
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ], 
  exports: [ 
    RouterModule
  ]
})
export class AdminModule { }
