export interface Order {
  id: number;
  customerId: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryAddress: OrderAddress;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  riderId?: number;
  riderName?: string;
  createdAt: Date;
  updatedAt: Date;
  preparationTime: number;
  estimatedDeliveryTime?: Date;
  actualDeliveryTime?: Date;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specialInstructions?: string;
}

export interface OrderAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
  apartment?: string;
  deliveryInstructions?: string;
}

export enum OrderStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  PREPARING = 'Preparing',
  READY_FOR_PICKUP = 'Ready for Pickup',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
  REFUNDED = 'Refunded'
}

export enum PaymentMethod {
  CASH = 'Cash',
  CREDIT_CARD = 'Credit Card',
  DIGITAL_WALLET = 'Digital Wallet',
  BANK_TRANSFER = 'Bank Transfer'
}

export enum PaymentStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  FAILED = 'Failed',
  REFUNDED = 'Refunded',
  PARTIALLY_REFUNDED = 'Partially Refunded'
}

export interface OrderTracking {
  orderId: number;
  status: OrderStatus;
  timestamp: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
  riderId?: number;
  notes?: string;
}

export interface OrderAnalytics {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  popularItems: PopularItem[];
  peakHours: PeakHour[];
  cancellationRate: number;
}

export interface PopularItem {
  productId: number;
  productName: string;
  quantitySold: number;
  revenue: number;
}

export interface PeakHour {
  hour: number;
  orderCount: number;
  averageOrderValue: number;
}