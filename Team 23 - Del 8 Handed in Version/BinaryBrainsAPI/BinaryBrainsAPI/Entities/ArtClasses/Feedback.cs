using BinaryBrainsAPI.Entities.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.ArtClasses
{
    public class Feedback
    {
        [Key]
        public int FeedbackID { get; set; }
        public string FeedbackComment { get; set; }
        public double TeacherRating { get; set; }
        public double DifficultyRating { get; set; }
        public double OverallRating { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public User User { get; set; }

        [ForeignKey("ArtClassID")] 
        public int ArtClassID { get; set; }
        public ArtClass ArtClass { get; set; }
    }
}
