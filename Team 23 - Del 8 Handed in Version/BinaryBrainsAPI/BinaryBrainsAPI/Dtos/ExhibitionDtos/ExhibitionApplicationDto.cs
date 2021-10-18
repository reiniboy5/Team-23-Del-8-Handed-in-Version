using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.ExhibitionDtos
{
    public class ExhibitionApplicationDto
    {
        public int ExhibitionApplicationID { get; set; }
        public string ExhibitionPicture1 { get; set; }
        public string ExhibitionPicture2 { get; set; }
        public string ExhibitionPicture3 { get; set; }
        public string ApplicationDescription { get; set; }

        public int ExhibitionID { get; set; }
        public ExhibitionDto Exhibition { get; set; }

        public int ApplicationStatusID { get; set; }
        public ApplicationStatusDto ApplicationStatus { get; set; }
    }
}
