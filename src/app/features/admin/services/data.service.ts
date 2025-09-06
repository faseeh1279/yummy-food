import { Injectable } from '@angular/core';
import { Product, ProductStatus, ProductCategory } from '../models/product.model';
import { Order, OrderStatus, PaymentMethod, PaymentStatus } from '../models/order.model';
import { Customer, CustomerStatus, CustomerAddress, CustomerPreferences } from '../models/customer.model';
import { Rider, RiderStatus, RiderVehicle, RiderPerformance } from '../models/rider.model';
import { Complaint, ComplaintStatus, ComplaintPriority, ComplaintUserType, ComplaintActivity } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Sample data arrays
  private products: Product[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 12.99,
      discount: 10,
      originalPrice: 14.43,
      status: ProductStatus.AVAILABLE,
      image: 'https://via.placeholder.com/150/ff6b35/ffffff?text=Pizza',
      description: 'Classic pizza with tomato sauce and mozzarella cheese',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Basil'],
      preparationTime: 20,
      isAvailable: true,
      stockQuantity: 25,
      minStockLevel: 5,
      tags: ['vegetarian', 'popular'],
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-07-15')
    },
    {
      id: 2,
      name: 'Beef Burger',
      category: 'Burger',
      price: 8.99,
      discount: 0,
      originalPrice: 8.99,
      status: ProductStatus.AVAILABLE,
      image: 'https://via.placeholder.com/150/2b2d42/ffffff?text=Burger',
      description: 'Juicy beef patty with fresh vegetables',
      ingredients: ['Beef patty', 'Lettuce', 'Tomato', 'Cheese'],
      preparationTime: 15,
      isAvailable: true,
      stockQuantity: 30,
      minStockLevel: 10,
      tags: ['beef', 'popular'],
      createdAt: new Date('2023-02-10'),
      updatedAt: new Date('2023-07-15')
    },
    {
      id: 3,
      name: 'Caesar Salad',
      category: 'Salad',
      price: 7.99,
      discount: 5,
      originalPrice: 8.41,
      status: ProductStatus.LOW_STOCK,
      image: 'https://via.placeholder.com/150/28a745/ffffff?text=Salad',
      description: 'Fresh romaine lettuce with Caesar dressing',
      ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan', 'Caesar dressing'],
      preparationTime: 10,
      isAvailable: true,
      stockQuantity: 3,
      minStockLevel: 5,
      tags: ['vegetarian', 'healthy'],
      createdAt: new Date('2023-03-20'),
      updatedAt: new Date('2023-07-15')
    }
  ];

  private orders: Order[] = [
    {
      id: 1234,
      customerId: 1,
      customerName: 'John Doe',
      customerPhone: '(123) 456-7890',
      customerEmail: 'john@example.com',
      deliveryAddress: {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      },
      items: [
        { productId: 1, productName: 'Margherita Pizza', quantity: 2, unitPrice: 12.99, totalPrice: 25.98 },
        { productId: 3, productName: 'Coke', quantity: 1, unitPrice: 2.99, totalPrice: 2.99 }
      ],
      subtotal: 28.97,
      deliveryFee: 2.99,
      tax: 1.01,
      total: 32.97,
      status: OrderStatus.PENDING,
      paymentMethod: PaymentMethod.CREDIT_CARD,
      paymentStatus: PaymentStatus.PAID,
      createdAt: new Date('2023-07-15T12:30:00'),
      updatedAt: new Date('2023-07-15T12:30:00'),
      preparationTime: 25
    },
    {
      id: 1235,
      customerId: 2,
      customerName: 'Jane Smith',
      customerPhone: '(123) 456-7891',
      customerEmail: 'jane@example.com',
      deliveryAddress: {
        street: '456 Oak Avenue',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        country: 'USA'
      },
      items: [
        { productId: 2, productName: 'Beef Burger', quantity: 1, unitPrice: 8.99, totalPrice: 8.99 },
        { productId: 4, productName: 'French Fries', quantity: 1, unitPrice: 3.99, totalPrice: 3.99 }
      ],
      subtotal: 12.98,
      deliveryFee: 2.99,
      tax: 0.53,
      total: 16.50,
      status: OrderStatus.PREPARING,
      paymentMethod: PaymentMethod.DIGITAL_WALLET,
      paymentStatus: PaymentStatus.PAID,
      createdAt: new Date('2023-07-15T11:45:00'),
      updatedAt: new Date('2023-07-15T11:50:00'),
      preparationTime: 20
    }
  ];

  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '(123) 456-7890',
      address: {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA',
        isPrimary: true
      },
      registrationDate: new Date('2023-01-15'),
      lastOrderDate: new Date('2023-07-15'),
      totalOrders: 15,
      totalSpent: 342.50,
      status: CustomerStatus.ACTIVE,
      isBlocked: false,
      preferences: {
        favoriteCategories: ['Pizza', 'Burger'],
        dietaryRestrictions: [],
        contactPreference: 'email',
        marketingOptIn: true
      },
      loyaltyPoints: 1500
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '(123) 456-7891',
      address: {
        street: '456 Oak Avenue',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        country: 'USA',
        isPrimary: true
      },
      registrationDate: new Date('2023-03-10'),
      lastOrderDate: new Date('2023-07-15'),
      totalOrders: 8,
      totalSpent: 156.75,
      status: CustomerStatus.ACTIVE,
      isBlocked: false,
      preferences: {
        favoriteCategories: ['Salad', 'Pasta'],
        dietaryRestrictions: ['Vegetarian'],
        contactPreference: 'sms',
        marketingOptIn: false
      },
      loyaltyPoints: 800
    }
  ];

  private riders: Rider[] = [
    {
      id: 1,
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike@example.com',
      phone: '(123) 456-7893',
      cnic: '12345-6789012-3',
      vehicleType: 'Motorcycle',
      licenseNumber: 'LIC123456',
      ordersDelivered: 42,
      status: RiderStatus.AVAILABLE,
      isActive: true,
      createdAt: new Date('2023-01-10'),
      lastActive: new Date('2023-07-15T14:30:00')
    },
    {
      id: 2,
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah@example.com',
      phone: '(123) 456-7894',
      cnic: '12345-6789012-4',
      vehicleType: 'Scooter',
      licenseNumber: 'LIC789012',
      ordersDelivered: 28,
      status: RiderStatus.ON_DELIVERY,
      isActive: true,
      createdAt: new Date('2023-02-15'),
      lastActive: new Date('2023-07-15T14:25:00')
    }
  ];

  private complaints: Complaint[] = [
    {
      id: 1,
      title: 'Late Delivery',
      description: 'Order was delivered 30 minutes late. The food was cold when it arrived.',
      submittedBy: 'John Doe',
      userType: ComplaintUserType.CUSTOMER,
      email: 'john@example.com',
      phone: '(123) 456-7890',
      status: ComplaintStatus.OPEN,
      priority: ComplaintPriority.MEDIUM,
      orderId: 1234,
      createdAt: new Date('2023-07-15T13:45:00'),
      updatedAt: new Date('2023-07-15T14:00:00')
    },
    {
      id: 2,
      title: 'Wrong Order',
      description: 'Received wrong items in the order. Ordered pizza but received pasta.',
      submittedBy: 'Jane Smith',
      userType: ComplaintUserType.CUSTOMER,
      email: 'jane@example.com',
      phone: '(123) 456-7891',
      status: ComplaintStatus.IN_PROGRESS,
      priority: ComplaintPriority.HIGH,
      orderId: 1235,
      assignedTo: 'Admin User',
      createdAt: new Date('2023-07-14T16:30:00'),
      updatedAt: new Date('2023-07-15T10:15:00')
    }
  ];

  private categories: ProductCategory[] = [
    { id: 1, name: 'Pizza', description: 'All types of pizzas', productCount: 12, isActive: true },
    { id: 2, name: 'Burger', description: 'Burgers and sandwiches', productCount: 8, isActive: true },
    { id: 3, name: 'Salad', description: 'Fresh salads', productCount: 5, isActive: true },
    { id: 4, name: 'Pasta', description: 'Italian pasta dishes', productCount: 6, isActive: true },
    { id: 5, name: 'Drinks', description: 'Beverages and drinks', productCount: 10, isActive: true }
  ];

  // Product Methods
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    const newProduct = {
      ...product,
      id: this.generateId(this.products),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products.push(newProduct);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = {
        ...product,
        updatedAt: new Date()
      };
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  // Order Methods
  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  getOrdersByStatus(status: OrderStatus): Order[] {
    return this.orders.filter(order => order.status === status);
  }

  updateOrderStatus(orderId: number, status: OrderStatus): void {
    const order = this.getOrderById(orderId);
    if (order) {
      order.status = status;
      order.updatedAt = new Date();
    }
  }

  assignRiderToOrder(orderId: number, riderId: number, riderName: string): void {
    const order = this.getOrderById(orderId);
    if (order) {
      order.riderId = riderId;
      order.riderName = riderName;
      order.updatedAt = new Date();
    }
  }

  // Customer Methods
  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  addCustomer(customer: Customer): void {
    const newCustomer = {
      ...customer,
      id: this.generateId(this.customers),
      registrationDate: new Date(),
      totalOrders: 0,
      totalSpent: 0,
      loyaltyPoints: 0,
      status: CustomerStatus.NEW
    };
    this.customers.push(newCustomer);
  }

  updateCustomer(customer: Customer): void {
    const index = this.customers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
  }

  blockCustomer(id: number, reason: string): void {
    const customer = this.getCustomerById(id);
    if (customer) {
      customer.isBlocked = true;
      customer.blockReason = reason;
      customer.status = CustomerStatus.BLOCKED;
    }
  }

  unblockCustomer(id: number): void {
    const customer = this.getCustomerById(id);
    if (customer) {
      customer.isBlocked = false;
      customer.blockReason = undefined;
      customer.status = CustomerStatus.ACTIVE;
    }
  }

  // Rider Methods
  getRiders(): Rider[] {
    return this.riders;
  }

  getRiderById(id: number): Rider | undefined {
    return this.riders.find(rider => rider.id === id);
  }

  addRider(rider: Rider): void {
    const newRider = {
      ...rider,
      id: this.generateId(this.riders),
      createdAt: new Date(),
      ordersDelivered: 0,
      isActive: true,
      status: RiderStatus.AVAILABLE
    };
    this.riders.push(newRider);
  }

  updateRider(rider: Rider): void {
    const index = this.riders.findIndex(r => r.id === rider.id);
    if (index !== -1) {
      this.riders[index] = rider;
    }
  }

  deleteRider(id: number): void {
    this.riders = this.riders.filter(rider => rider.id !== id);
  }

  updateRiderStatus(id: number, status: RiderStatus): void {
    const rider = this.getRiderById(id);
    if (rider) {
      rider.status = status;
      rider.lastActive = new Date();
    }
  }

  // Complaint Methods
  getComplaints(): Complaint[] {
    return this.complaints;
  }

  getComplaintById(id: number): Complaint | undefined {
    return this.complaints.find(complaint => complaint.id === id);
  }

  addComplaint(complaint: Complaint): void {
    const newComplaint = {
      ...complaint,
      id: this.generateId(this.complaints),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.complaints.push(newComplaint);
  }

  updateComplaint(complaint: Complaint): void {
    const index = this.complaints.findIndex(c => c.id === complaint.id);
    if (index !== -1) {
      this.complaints[index] = {
        ...complaint,
        updatedAt: new Date()
      };
    }
  }

  updateComplaintStatus(id: number, status: ComplaintStatus): void {
    const complaint = this.getComplaintById(id);
    if (complaint) {
      complaint.status = status;
      complaint.updatedAt = new Date();
      if (status === ComplaintStatus.RESOLVED) {
        complaint.resolvedAt = new Date();
      }
    }
  }

  // Category Methods
  getCategories(): ProductCategory[] {
    return this.categories;
  }

  getCategoryById(id: number): ProductCategory | undefined {
    return this.categories.find(category => category.id === id);
  }

  addCategory(category: ProductCategory): void {
    const newCategory = {
      ...category,
      id: this.generateId(this.categories),
      productCount: 0
    };
    this.categories.push(newCategory);
  }

  updateCategory(category: ProductCategory): void {
    const index = this.categories.findIndex(c => c.id === category.id);
    if (index !== -1) {
      this.categories[index] = category;
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }

  // Statistics Methods
  getDashboardStats(): any {
    return {
      totalProducts: this.products.length,
      totalCustomers: this.customers.length,
      totalRiders: this.riders.length,
      totalOrders: this.orders.length,
      pendingOrders: this.orders.filter(o => o.status === OrderStatus.PENDING).length,
      activeComplaints: this.complaints.filter(c => 
        c.status === ComplaintStatus.OPEN || c.status === ComplaintStatus.IN_PROGRESS
      ).length
    };
  }

  getRevenueData(): any {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [1250, 1900, 1800, 2100, 2400, 2800]
    };
  }

  // Utility Methods
  private generateId(items: any[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }

  // Search Methods
  searchProducts(query: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
    );
  }

  searchCustomers(query: string): Customer[] {
    return this.customers.filter(customer =>
      customer.firstName.toLowerCase().includes(query.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(query.toLowerCase()) ||
      customer.email.toLowerCase().includes(query.toLowerCase()) ||
      customer.phone.includes(query)
    );
  }

  // Filter Methods
  filterOrdersByDate(startDate: Date, endDate: Date): Order[] {
    return this.orders.filter(order =>
      order.createdAt >= startDate && order.createdAt <= endDate
    );
  }

  filterProductsByStatus(status: ProductStatus): Product[] {
    return this.products.filter(product => product.status === status);
  }
}