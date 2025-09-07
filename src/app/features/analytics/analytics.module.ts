import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './pages/analytics.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
