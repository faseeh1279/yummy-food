import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidersComponent } from './pages/riders.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard-page',
    component: RidersComponent
  }
];
@NgModule({
  declarations: [
    RidersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RidersModule { }
