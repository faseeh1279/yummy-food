import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories-page',
    component: CategoriesComponent
  }
];

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  CategoriesComponent
  ]
})
export class CategoriesModule { }
