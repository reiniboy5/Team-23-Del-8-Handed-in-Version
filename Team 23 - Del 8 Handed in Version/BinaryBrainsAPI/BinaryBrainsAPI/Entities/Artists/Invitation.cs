using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artists
{
    public class Invitation
    {
        [Key]
        public int InvitationID { get; set; }
        public string InvitationDetails { get; set; }
        public DateTime InvitationDate { get; set; }

        [ForeignKey("ExhibitionID")]
        public int ExhibitionID { get; set; }
        public Exhibition Exhibition { get; set; }

        [ForeignKey("InvitationStatusID")]
        public int InvitationStatusID { get; set; }
        public InvitationStatus InvitationStatus { get; set; }
    }
}
