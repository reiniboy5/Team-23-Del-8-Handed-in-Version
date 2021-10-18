import { Booking } from '../Bookings/booking';
import { Refund } from './refund';

export class Payment {
  paymentID: string;
  amount: string;
  paymentDateTime: string;
  cardNumber: string;
  cardHolderName: string;
  code: string;
  expiryDate: string;
  paymentType: string;
  paymentStatus: string;
  booking: Booking;
  refund: Refund;
}
