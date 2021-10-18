using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class UserTypeRepository : IAppRepository<UserType>
    {
        readonly ArtechDbContext _artechDb;


        public UserTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(UserType userType)
        {
            _artechDb.UserType.Add(userType);
            _artechDb.SaveChanges();
        }

        public void Delete(UserType userType)
        {
            _artechDb.UserType.Remove(userType);
            _artechDb.SaveChanges();
        }

        public UserType Get(long id)
        {
            return _artechDb.UserType.FirstOrDefault(s => s.UserTypeID == id);
        }

        public IEnumerable<UserType> GetAll()
        {
            return _artechDb.UserType.ToList();
        }

        public UserType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(UserType userType, UserType entity)
        {
            userType.UserRoleName = entity.UserRoleName;
            _artechDb.SaveChanges();
        }

        IEnumerable<UserType> IAppRepository<UserType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
