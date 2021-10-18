using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class Venue
    {
        [Key]
        public int VenueID { get; set; }
        public string VenueDescription { get; set; }
    }
}
