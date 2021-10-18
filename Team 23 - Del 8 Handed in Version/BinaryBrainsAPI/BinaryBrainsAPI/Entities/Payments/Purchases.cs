using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Payments
{
    public class Purchases
    {
        [Key]
        public int PurchasesID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public string IDNumber { get; set; }
        public Nullable<int> ArtworkID { get; set; }

    }
}
