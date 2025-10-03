import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
currentUrl: string = '';
isProductsDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set initial route
    this.currentUrl = this.router.url;

    // Subscribe to changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  toggleProductsDropdown() {
    this.isProductsDropdownOpen = !this.isProductsDropdownOpen;
  }
}