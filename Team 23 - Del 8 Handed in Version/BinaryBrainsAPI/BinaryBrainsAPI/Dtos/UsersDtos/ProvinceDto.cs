using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.UsersDtos
{
    public class ProvinceDto
    {
        public int ProvinceID { get; set; }
        public string ProvinceDescription { get; set; }

        public int CountryID { get; set; }
        public CountryDto Country { get; set; }
    }
}
