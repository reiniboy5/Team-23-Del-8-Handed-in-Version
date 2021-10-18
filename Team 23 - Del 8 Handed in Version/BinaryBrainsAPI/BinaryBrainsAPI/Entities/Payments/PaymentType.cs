using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Payments
{
    public class PaymentType
    {
        [Key]
        public int PaymentTypeID { get; set; }
        public string PaymentTypeDescription { get; set; }
    }
}
