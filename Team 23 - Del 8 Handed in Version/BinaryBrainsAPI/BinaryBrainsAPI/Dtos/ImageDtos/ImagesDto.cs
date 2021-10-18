using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.ImageDtos
{
    public class ImageDto
    {

        public int ImageID { get; set; }
        public byte ImageContent { get; set; }
        public int ImageTypeID { get; set; }
        public ImageTypeDto ImageType { get; set; }
    }
}
