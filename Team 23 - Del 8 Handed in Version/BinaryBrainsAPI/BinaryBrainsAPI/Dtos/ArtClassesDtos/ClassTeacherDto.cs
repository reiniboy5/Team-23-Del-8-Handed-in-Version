using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.ArtClassesDtos
{
    public class ClassTeacherDto
    {
        public int ClassTeacherID { get; set; }
        public string TeacherName { get; set; }
        public string TeacherSurname { get; set; }
        public string TeacherEmail { get; set; }
        public int TeacherPhoneNumber { get; set; }

        public int TeacherTypeID { get; set; }
        public TeacherTypeDto TeacherType { get; set; }
    }
}
