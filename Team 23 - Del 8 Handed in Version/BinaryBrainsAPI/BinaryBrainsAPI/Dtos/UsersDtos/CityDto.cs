using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.UsersDtos
{
    public class CityDto
    {
        public int CityID { get; set; }
        public string CityDescription { get; set; }
        public int ProvinceID { get; set; }
        public ProvinceDto Province { get; set; }
    }
}
