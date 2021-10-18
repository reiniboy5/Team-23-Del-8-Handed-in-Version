using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.ExhibitionDtos
{
    public class ScheduleDto
    {
        public int ScheduleID { get; set; }

        public string ScheduleName { get; set; }

        public string ScheduleDescription { get; set; }

        public int ScheduleTypeID { get; set; }
        public ScheduleTypeDto ScheduleType { get; set; }
    }
}
