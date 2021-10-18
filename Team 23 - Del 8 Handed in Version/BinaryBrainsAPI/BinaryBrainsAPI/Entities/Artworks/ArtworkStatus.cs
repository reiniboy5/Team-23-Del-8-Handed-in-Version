using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class ArtworkStatus
    {
        [Key]
        public int ArtworkStatusID { get; set; }
        public string ArtworkStatusDescription { get; set; }
    }
}
