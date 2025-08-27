import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { 
    path: "about-us/", 
    component: AboutUsComponent, 
  }
];

@NgModule({
  declarations: [
    AboutUsComponent, 
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ], 
  exports: [
    RouterModule
  ]
})
export class SharedModule { }
