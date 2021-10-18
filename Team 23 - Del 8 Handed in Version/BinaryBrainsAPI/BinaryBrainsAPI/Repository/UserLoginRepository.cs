using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class UserLoginRepository : IIdentifier<User>
    {
        readonly ArtechDbContext _artechDb;


        public UserLoginRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }
        public User getUser(string UserName)
        {

            return _artechDb.User.FirstOrDefault(u => u.UserName == UserName);
        }
            
    }
}
