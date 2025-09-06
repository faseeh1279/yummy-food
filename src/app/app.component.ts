import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet,RouterLinkActive,RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  
  ngOnInit(): void {
    
  }

}
