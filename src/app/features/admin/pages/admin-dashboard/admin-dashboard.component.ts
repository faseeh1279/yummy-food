import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { Customer } from '../../models/customer.model';
import { Rider } from '../../models/rider.model';
import { Complaint } from '../../models/complaint.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  standalone: false
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {

 activeSection: string = 'dashboard';
  products: Product[] = [];
  orders: Order[] = [];
  customers: Customer[] = [];
  riders: Rider[] = [];
  complaints: Complaint[] = [];
  
  // Statistics
  stats = {
    totalProducts: 42,
    totalCustomers: 156,
    totalRiders: 8,
    totalOrders: 128
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  loadData(): void {
    this.products = this.dataService.getProducts();
    this.orders = this.dataService.getOrders();
    this.customers = this.dataService.getCustomers();
    this.riders = this.dataService.getRiders();
    this.complaints = this.dataService.getComplaints();
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  initCharts(): void {
    // // Sales Chart
    // new Chart('salesChart', {
    //   type: 'line',
    //   data: {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //     datasets: [{
    //       label: 'Sales ($)',
    //       data: [1250, 1900, 1800, 2100, 2400, 2800],
    //       borderColor: '#ff6b35',
    //       tension: 0.3,
    //       fill: true,
    //       backgroundColor: 'rgba(255, 107, 53, 0.1)'
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: { y: { beginAtZero: true } }
    //   }
    // });

    // // Revenue Chart
    // new Chart('revenueChart', {
    //   type: 'bar',
    //   data: {
    //     labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Drinks'],
    //     datasets: [{
    //       label: 'Revenue by Category ($)',
    //       data: [4200, 3200, 1800, 1200, 900],
    //       backgroundColor: [
    //         'rgba(255, 107, 53, 0.8)',
    //         'rgba(43, 45, 66, 0.8)',
    //         'rgba(255, 193, 7, 0.8)',
    //         'rgba(40, 167, 69, 0.8)',
    //         'rgba(23, 162, 184, 0.8)'
    //       ]
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: { y: { beginAtZero: true } }
    //   }
    // });

    // // Category Chart
    // new Chart('categoryChart', {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Drinks'],
    //     datasets: [{
    //       data: [12, 8, 6, 5, 10],
    //       backgroundColor: [
    //         '#ff6b35',
    //         '#2b2d42',
    //         '#ffc107',
    //         '#28a745',
    //         '#17a2b8'
    //       ]
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     plugins: { legend: { position: 'bottom' } }
    //   }
    // });
  }

  // Modal handlers
  openModal(modalId: string): void {
    // Implement modal opening logic
    console.log(`Opening modal: ${modalId}`);
  }

  // CRUD operations
  addProduct(product: Product): void {
    this.dataService.addProduct(product);
    this.products = this.dataService.getProducts();
  }

  updateProduct(product: Product): void {
    this.dataService.updateProduct(product);
    this.products = this.dataService.getProducts();
  }

  deleteProduct(id: number): void {
    this.dataService.deleteProduct(id);
    this.products = this.dataService.getProducts();
  }
}