import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/forms/login/login.component';
import { SignupComponent } from './component/forms/signup/signup.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterOutlet,
    HttpClientModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AuthModule { }
