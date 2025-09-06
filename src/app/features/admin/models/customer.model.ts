export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  registrationDate: Date;
  lastOrderDate?: Date;
  totalOrders: number;
  totalSpent: number;
  status: CustomerStatus;
  isBlocked: boolean;
  blockReason?: string;
  preferences?: CustomerPreferences;
  loyaltyPoints: number;
}

export interface CustomerAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
  isPrimary: boolean;
}

export enum CustomerStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  NEW = 'New',
  VIP = 'VIP',
  BLOCKED = 'Blocked'
}

export interface CustomerPreferences {
  favoriteCategories: string[];
  dietaryRestrictions: string[];
  deliveryInstructions?: string;
  contactPreference: 'email' | 'sms' | 'both';
  marketingOptIn: boolean;
}

export interface CustomerOrderHistory {
  orderId: number;
  date: Date;
  totalAmount: number;
  status: string;
  items: string[];
  rating?: number;
  feedback?: string;
}

export interface CustomerStats {
  totalCustomers: number;
  activeCustomers: number;
  newCustomersThisMonth: number;
  averageOrderValue: number;
  retentionRate: number;
  topSpendingCustomers: Customer[];
}

export interface CustomerLoyalty {
  customerId: number;
  tier: string;
  points: number;
  pointsToNextTier: number;
  benefits: string[];
  joinDate: Date;
  lifetimeValue: number;
}