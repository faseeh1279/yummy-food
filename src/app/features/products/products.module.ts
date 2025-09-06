import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'products-page',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
