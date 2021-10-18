using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class PrivilegesRepository : IAppRepository<Privileges>
    {
        readonly ArtechDbContext _artechDb;


        public PrivilegesRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Privileges privileges)
        {
            _artechDb.Privileges.Add(privileges);
            _artechDb.SaveChanges();
        }

        public void Delete(Privileges privileges)
        {
            _artechDb.Privileges.Remove(privileges);
            _artechDb.SaveChanges();
        }

        public Privileges Get(long id)
        {
            return _artechDb.Privileges.FirstOrDefault(s => s.PrivilegesID == id);
        }

        public IEnumerable<Privileges> GetAll()
        {
            return _artechDb.Privileges.ToList();
        }

        public Privileges GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Privileges privileges, Privileges entity)
        {
            privileges.PrivilegeName = entity.PrivilegeName;
            privileges.PrivilegeDescription = entity.PrivilegeDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<Privileges> IAppRepository<Privileges>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
