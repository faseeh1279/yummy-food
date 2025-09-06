import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss', 
  standalone: false 
})



export class ItemDetailsComponent implements OnInit{

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    // this.adminService.fetchItems().subscribe({
    //   next: (result) => {
    //     this.itemDetails = result;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching items', err);
    //   }
    // });
  }
}