using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class ApplicationTag
    {
        [Key]
        public int ApplicationTagID { get; set; }
        public string ApplicationArtworkTitle { get; set; }
        public string ApplicationDimension { get; set; }

        public string Price { get; set; }
        public string Medium { get; set; }

        [ForeignKey("ExhibitionApplicationID")]
        public int? ExhibitionApplicationID { get; set; }
        public ExhibitionApplication ExhibitionApplication { get; set; }

        [ForeignKey ("ExhibitionID")]
        public int? ExhibitionID { get; set; }
        public Exhibition Exhibition { get; set; }

    }
}
