using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Entities.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Exhibitions
{
    public class ExhibitionApplication
    {
        [Key]
        public int ExhibitionApplicationID { get; set; }
        public string ApplicationDescription { get; set; }
        public string ExhibitionApplicationImage1 { get; set; }
        public string ExhibitionApplicationImage2 { get; set; }
        public string ExhibitionApplicationImage3 { get; set; }

        [ForeignKey("ExhibitionID")]
        public int? ExhibitionID { get; set; }
        public Exhibition Exhibition { get; set; }

        [ForeignKey("ApplicationStatusID")]
        public int? ApplicationStatusID { get; set; }
        public ApplicationStatus ApplicationStatus { get; set; }

        [ForeignKey("UserID")]
        public int? UserID { get; set; }
        public User User { get; set; }
    }
}
