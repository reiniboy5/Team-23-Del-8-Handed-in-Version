using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class Schedule
    {
        [Key]
        public int ScheduleID { get; set; }

        public string ScheduleName { get; set; }

        public string ScheduleDescription { get; set; }

        [ForeignKey("ScheduleTypeID")]
        public int ScheduleTypeID { get; set; }
        public ScheduleType ScheduleType { get; set; }
    }
}
