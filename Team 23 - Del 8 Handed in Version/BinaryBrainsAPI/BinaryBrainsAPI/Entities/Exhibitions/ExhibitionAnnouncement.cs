using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class ExhibitionAnnouncement
    {
        [Key]
        public int ExhibitionAnnouncementID { get; set; }
        public string ExhibitionAnnouncementDescription { get; set; }

        [ForeignKey("ExhibitionID")]
        public int ExhibitionID { get; set; }
        public Exhibition Exhibition { get; set; }
    }
}
