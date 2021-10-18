using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Images
{
    public class ImageType
    {
        [Key]
        public int ImageTypeID { get; set; }
        public string ImageTypeDescription { get; set; }
    }
}
