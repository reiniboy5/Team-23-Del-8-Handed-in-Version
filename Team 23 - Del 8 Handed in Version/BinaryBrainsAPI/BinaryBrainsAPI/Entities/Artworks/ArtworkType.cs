using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class ArtworkType
    {
        [Key]
        public int ArtworkTypeID { get; set; }
        public string ArtworkTypeDescription { get; set; }
    }
}
