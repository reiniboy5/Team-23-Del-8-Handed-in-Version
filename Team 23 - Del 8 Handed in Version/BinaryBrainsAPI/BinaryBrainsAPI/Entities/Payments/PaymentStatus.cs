using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Payments
{
    public class PaymentStatus
    {
        [Key]
        public int PaymentStatusID { get; set; }
        public string PaymentStatusDescription { get; set; }
    }
}
