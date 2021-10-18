using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Users
{
    public class Timer
    {
        [Key]
        public int TimerID { get; set; }
        public int TimerSet { get; set; }

    }
}
