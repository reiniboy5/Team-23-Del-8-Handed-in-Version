using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Payments
{
    public class Refund
    {
        [Key]
        public int RefundID { get; set; }
        public string RefundStatus { get; set; }

        public string ArtClassRefunded { get; set; }
    }
}
