import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

// app-routing.module.ts
const routes: Routes = [
  {
    path: 'dashboard-page',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
