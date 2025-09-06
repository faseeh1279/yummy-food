export interface Rider {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cnic: string;
  vehicleType: string;
  licenseNumber: string;
  ordersDelivered: number;
  status: RiderStatus;
  isActive: boolean;
  createdAt: Date;
  lastActive?: Date;
}

export enum RiderStatus {
  AVAILABLE = 'Available',
  ON_DELIVERY = 'On Delivery',
  OFFLINE = 'Offline',
  BUSY = 'Busy'
}

export interface RiderVehicle {
  type: string;
  model?: string;
  plateNumber?: string;
  color?: string;
}

export interface RiderPerformance {
  riderId: number;
  totalOrders: number;
  completedOrders: number;
  averageDeliveryTime: number;
  rating: number;
  totalEarnings: number;
  month: string;
}