export interface Complaint {
  id: number;
  title: string;
  description: string;
  submittedBy: string;
  userType: ComplaintUserType;
  email: string;
  phone: string;
  status: ComplaintStatus;
  priority: ComplaintPriority;
  orderId?: number;
  riderId?: number;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  notes?: string;
  resolution?: string;
}

export enum ComplaintStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  REJECTED = 'Rejected',
  CLOSED = 'Closed'
}

export enum ComplaintPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  URGENT = 'Urgent'
}

export enum ComplaintUserType {
  CUSTOMER = 'Customer',
  RIDER = 'Rider',
  RESTAURANT = 'Restaurant Staff'
}

export interface ComplaintActivity {
  id: number;
  complaintId: number;
  action: string;
  performedBy: string;
  timestamp: Date;
  details?: string;
}

export interface ComplaintStats {
  total: number;
  open: number;
  inProgress: number;
  resolved: number;
  rejected: number;
  averageResolutionTime: number;
}