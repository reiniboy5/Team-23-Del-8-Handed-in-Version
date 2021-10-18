using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Users
{
    public class City
    {
        [Key]
        public int CityID { get; set; }
        public string CityName { get; set; }

        [ForeignKey("ProvinceID")]
        public int ProvinceID { get; set; }
        public Province Province { get; set; }

    }
}
