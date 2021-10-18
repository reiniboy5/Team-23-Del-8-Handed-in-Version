using BinaryBrainsAPI.Dtos.ExhibitionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos
{
    public class ExhibitionDto
    {
        public int ExhibitionID { get; set; }

        public string ExhibitionName { get; set; }

        public string ExhibitionDescription { get; set; }

        public DateTime ExhibitionDate { get; set; }

        public DateTime ExhibitionTime { get; set; }

        public string Exhibition_Image { get; set; }

        public int ExhibitionTypeID { get; set; }
        public ExhibitionTypeDto ExhibitionType { get; set; }

        public int ScheduleID { get; set; }
        public ScheduleDto Schedule { get; set; }

        public int OrganisationID { get; set; }
        public OrganisationDto Organisation { get; set; }

        public int ExhibitionAnnouncementID { get; set; }
        public ExhibitionAnnouncementDto ExhibitionAnnouncement { get; set; }

        public int VenueID { get; set; }
        public VenueDto Venue { get; set; }
    }
}
