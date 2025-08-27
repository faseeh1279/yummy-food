import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  standalone: false
})
export class AdminDashboardComponent implements OnInit {

  ngOnInit(): void {
    console.log("Admin Dashboard working"); 
  }
}
