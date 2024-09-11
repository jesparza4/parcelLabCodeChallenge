export interface Order {
  Id: string;
  courier: string;
  trackingNumber: string;
  created: string;
  updated: string;
  checkpoints: Checkpoint[];
  deliveryInfo: DeliveryInfo;
  destinationCountryIso3: string;
  zipCode: string;
}

export interface Checkpoint {
  statusDetails: string;
  eventTimestamp: string;
  status: string;
  countryIso3: string;
  city: string;
  meta?: Meta;
  statusKey: keyof typeof DeliveryStatus;
}

export interface Meta {
  pickupAddress?: string;
  pickupAddressLink?: string;
  pickupAddressMapUrl?: string;
  deliveryDate?: string;
  deliveryTimeFrameFrom?: string;
  deliveryTimeFrameTo?: string;
}

export interface DeliveryInfo {
  articles: Article[];
  orderNo: string;
  orderDate: string;
  recipient: string;
  recipientNotification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announcedDeliveryDate: string;
}

export interface Article {
  articleNo: string;
  articleName: string;
  articleImageUrl?: string;
  quantity: number;
  price: number;
}

export enum DeliveryStatus {
  registered = "Registered",
  newDelivery = "New delivery date set",
  readyForCollection = "Ready for collection",
  failedAttempt = "Failed delivery attempt",
  inTransit = "In transit",
  delivered = "Delivered",
}
