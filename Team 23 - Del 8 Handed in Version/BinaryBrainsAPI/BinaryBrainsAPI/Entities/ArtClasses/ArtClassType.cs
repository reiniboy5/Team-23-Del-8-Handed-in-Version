using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.ArtClasses
{
    public class ArtClassType
    {
        [Key]
        public int ArtClassTypeID { get; set; }
        public string ArtClassTypeDescription { get; set; }
    }
}
