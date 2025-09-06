import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintComponent } from './pages/complaint.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'complaints-page',
    component: ComplaintComponent
  }
];

@NgModule({
  declarations: [
    ComplaintComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComplaintModule { }
