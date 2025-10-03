import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/add-product-page/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './components/forms/add-product/add-product.component';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';
import { UpdateProductFormComponent } from './components/forms/update-product-form/update-product-form.component';
import { ProductViewCardComponent } from './components/cards/product-view-card/product-view-card.component';


const routes: Routes = [
  {
    path: 'products-page',
    component: ProductsComponent
  }, 
  { 
    path: 'list-products-page',
    component: ListProductPageComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent, 
    AddProductComponent, 
    ListProductPageComponent, 
    UpdateProductFormComponent, 
    ProductViewCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule, 
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
