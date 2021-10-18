using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class MediumType
    {
        [Key]
        public int MediumTypeID { get; set; }

        [Required]
        public string MediumTypeName { get; set; }
    }
}
