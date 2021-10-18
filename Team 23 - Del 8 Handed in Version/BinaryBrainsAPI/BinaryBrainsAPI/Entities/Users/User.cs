using BinaryBrainsAPI.Entities.Images;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Users
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }

        [Column(TypeName = "varchar(50)")]
        public int UserPhoneNumber { get; set; }
        public string UserPassword { get; set; }
        public DateTime UserDOB { get; set; }
        public string? ProfilePicture { get; set; }
        public string UserAddressLine1 { get; set; }
        public string UserAddressLine2 { get; set; }
        public int UserPostalCode { get; set; }
        public string ArtistBio { get; set; }

        [ForeignKey("UserTypeID")]
        public int UserTypeID { get; set; }
        public UserType UserType { get; set; }
        public int SuburbID { get; set; }
        public bool IsVerified { get; set; }

        public DateTime timestamp { get; set; }



    }
}
