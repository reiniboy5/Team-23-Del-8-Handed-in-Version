using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class ApplicationStatus
    {
        [Key]
        public int ApplicationStatusID { get; set; }
        public string ApplicationStatusDescription { get; set; }
    }
}
