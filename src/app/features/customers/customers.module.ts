import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './pages/customers.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers-page',
    component: CustomersComponent
  }
];

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule { }
