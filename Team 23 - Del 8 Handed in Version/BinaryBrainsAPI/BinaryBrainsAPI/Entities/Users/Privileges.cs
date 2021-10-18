using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Users
{
    public class Privileges
    {
        public int PrivilegesID { get; set; }
        public string PrivilegeName { get; set; }
        public string PrivilegeDescription{ get; set; }
    }
}
