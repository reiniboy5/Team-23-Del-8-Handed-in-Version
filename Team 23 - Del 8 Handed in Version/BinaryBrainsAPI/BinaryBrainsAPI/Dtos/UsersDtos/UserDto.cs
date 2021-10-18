using BinaryBrainsAPI.Dtos.ImageDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.UsersDtos
{
    public class UserDto
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }
        public int UserPhoneNumber { get; set; }
        public string UserPassword { get; set; }
        public DateTime UserDOB { get; set; }
        public string UserAddressLine1 { get; set; }
        public string UserAddressLine2 { get; set; }
        public int UserPostalCode { get; set; }
        public string UserProfilePicture { get; set; }

        public int UserTypeID { get; set; }
        public UserTypeDto UserType { get; set; }

        public int SuburbID { get; set; }
        public SuburbDto Suburb { get; set; }

        public int ImageID { get; set; }
        public ImageDto Image { get; set; }
    }
}
