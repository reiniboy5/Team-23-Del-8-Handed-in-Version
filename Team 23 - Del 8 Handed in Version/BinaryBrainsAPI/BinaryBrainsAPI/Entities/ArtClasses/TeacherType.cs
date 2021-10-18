using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.ArtClasses
{
    public class TeacherType
    {
        [Key]
        public int TeacherTypeID { get; set; }
        public string TeacherTypeDescription { get; set; }
    }
}
