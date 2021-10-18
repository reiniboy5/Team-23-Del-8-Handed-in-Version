using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class FrameColour
    {
        [Key]
        public int FrameColourID { get; set; }
        public string FrameColourDescription { get; set; }
    }
}
