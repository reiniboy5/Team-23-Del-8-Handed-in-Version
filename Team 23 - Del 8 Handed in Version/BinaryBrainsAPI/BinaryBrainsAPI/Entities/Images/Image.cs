using BinaryBrainsAPI.Entities.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Images
{
    public class Image
    {
        [Key]
        public int ImageID { get; set; }
        public byte[] ImageContent { get; set; }

        [ForeignKey("ImageTypeID")]

        public int ImageTypeID { get; set; }
        public ImageType ImageType { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public virtual User User { get; set; }
    }
}
