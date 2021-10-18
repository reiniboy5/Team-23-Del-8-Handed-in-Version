using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Entities.Users;

namespace BinaryBrainsAPI.Entities.Bookings
{
    public class Booking
    {
        [Key]
        public int BookingID { get; set; }
        public DateTime BookingDateTime { get; set; }
        public string BookingStatus { get; set; }

        [ForeignKey("BookingNotificationID")]
        public int? BookingNotificationID { get; set; }
        public BookingNotification BookingNotification { get; set; }

        [ForeignKey("ArtClassID")]
        public int ArtClassID { get; set; }
        public ArtClass ArtClass { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public User User { get; set; }

    



    }
}
