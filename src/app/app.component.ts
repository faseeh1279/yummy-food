import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LayoutService } from './layouts/services/layout.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
private showLayoutValue = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(r => {
          // Walk down to the deepest child
          while (r.firstChild) {
            r = r.firstChild;
          }
          return r;
        }),
        mergeMap(r => r.data)
      )
      .subscribe(data => {
        this.showLayoutValue = data['showLayout'] !== false; // default true
        console.log('showLayout:', this.showLayoutValue, data);
      });
  }

  get showLayout(): boolean {
    return this.showLayoutValue;
  }
}
