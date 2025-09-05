import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss', 
  standalone: false 
})

export class LayoutComponent {
  
constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {}
  
  get isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }
  
  get isSignupPage(): boolean {
    return this.router.url.includes('/signup');
  }
  
  get title(): string {
    return this.isLoginPage ? 'Welcome back' : 'Create account';
  }
  
  get subtitle(): string {
    return this.isLoginPage 
      ? 'Sign in to your account' 
      : 'Get started with our platform';
  }
}