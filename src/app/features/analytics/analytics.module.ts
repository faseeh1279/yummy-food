import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './pages/analytics.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'analytics-page',
    component: AnalyticsComponent
  }
];
@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
