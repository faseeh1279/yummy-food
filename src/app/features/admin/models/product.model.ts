export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  originalPrice: number;
  status: ProductStatus;
  image: string;
  description?: string;
  ingredients?: string[];
  preparationTime?: number;
  isAvailable: boolean;
  stockQuantity: number;
  minStockLevel: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ProductStatus {
  AVAILABLE = 'Available',
  LOW_STOCK = 'Low Stock',
  OUT_OF_STOCK = 'Out of Stock',
  DISCONTINUED = 'Discontinued'
}

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  productCount: number;
  isActive: boolean;
}

export interface ProductInventory {
  productId: number;
  currentStock: number;
  minStockLevel: number;
  lastRestocked: Date;
  supplier?: string;
  costPrice: number;
}

export interface ProductReview {
  id: number;
  productId: number;
  customerId: number;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: Date;
  isApproved: boolean;
}