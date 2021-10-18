using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.UsersDtos
{
    public class SuburbDto
    {
        public int SuburbID { get; set; }
        public string SuburbDescription { get; set; }

        public int CityID { get; set; }
        public CityDto City { get; set; }
    }

}
