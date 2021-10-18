using BinaryBrainsAPI.Entities.Bookings;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Payments
{
    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }
        public double Amount { get; set; }
        public DateTime PaymentDateTime { get; set; }

        public string? CardNumber { get; set; }

        public string? CardHolderName { get; set; }

        public string? Code { get; set; }

        public string? ExpiryDate { get; set; }
        public string PaymentType { get; set; }

        public string PaymentStatus { get; set; }
       

       [ForeignKey("BookingID")]
       public int BookingID { get; set; }
       public Booking Booking { get; set; }

        [ForeignKey("RefundID")]
        public int? RefundID { get; set; }
        public Refund Refund { get; set; }
    }
}
