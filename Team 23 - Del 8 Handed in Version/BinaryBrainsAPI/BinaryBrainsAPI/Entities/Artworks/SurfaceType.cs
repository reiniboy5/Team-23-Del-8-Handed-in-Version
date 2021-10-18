using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class SurfaceType
    {
        [Key]
        public int SurfaceTypeID { get; set; }
        [Required]
        public string SurfaceTypeName { get; set; }
    }
}
