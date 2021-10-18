using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Bookings
{
    public class BookingNotification
    {
        [Key]
        public int BookingNotificationID { get; set; }
        public string BookNotificationDescription { get; set; }
    }
}
