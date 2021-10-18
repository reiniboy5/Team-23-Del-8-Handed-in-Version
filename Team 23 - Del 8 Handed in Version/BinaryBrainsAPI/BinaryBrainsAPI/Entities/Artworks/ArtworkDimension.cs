using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class ArtworkDimension
    {
        [Key]
        public int ArtworkDimensionID { get; set; }
        public string ArtworkDimensionDescription { get; set; }
    }
}
