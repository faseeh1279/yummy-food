import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidersComponent } from './pages/riders.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'riders-page',
    component: RidersComponent
  }
];
@NgModule({
  declarations: [
    RidersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RidersModule { }
