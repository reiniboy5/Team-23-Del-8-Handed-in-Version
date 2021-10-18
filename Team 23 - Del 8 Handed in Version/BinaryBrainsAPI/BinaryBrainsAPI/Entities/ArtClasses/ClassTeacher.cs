using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.ArtClasses
{
    public class ClassTeacher
    {
        [Key]
        public int ClassTeacherID { get; set; }
        public string TeacherName { get; set; }
        public string TeacherSurname { get; set; }
        public string TeacherEmail { get; set; }

        [Column(TypeName = "varchar(50)")]
        public int TeacherPhoneNumber { get; set; }

        [ForeignKey("TeacherTypeID")]
        public int TeacherTypeID { get; set; }
        public TeacherType TeacherType { get; set; }

    }
}
