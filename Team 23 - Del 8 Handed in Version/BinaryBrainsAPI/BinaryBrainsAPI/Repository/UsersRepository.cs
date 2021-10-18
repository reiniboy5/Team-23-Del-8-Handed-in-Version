using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BinaryBrainsAPI.Repository
{
    public class UsersRepository : IAppRepository<User>
    {
        readonly ArtechDbContext _artechDb;


        public UsersRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public IEnumerable<User> GetAll()
        {

            return _artechDb.User.Include(x => x.UserType).ToList();
        }
        public void Add(User user)
        {
            _artechDb.User.Add(user);
            _artechDb.SaveChanges();
        }

        public void Delete(User user)
        {
            _artechDb.User.Remove(user);
            _artechDb.SaveChanges();

        }

        public User Get(long id)
        {
            return _artechDb.User.FirstOrDefault(u=> u.UserID == id);
        }

  

        public void Update(User user, User entity)
        {
            user.UserID = entity.UserID;
            user.UserFirstName = entity.UserFirstName;
            user.UserName = entity.UserName;
            user.UserFirstName = entity.UserFirstName;
            user.UserLastName = entity.UserLastName;
            user.UserEmail = entity.UserEmail;
            user.UserPhoneNumber = entity.UserPhoneNumber;
            user.UserPassword = entity.UserPassword;
            user.UserDOB = entity.UserDOB;
            user.UserAddressLine1 = entity.UserAddressLine1;
            user.UserAddressLine2 = entity.UserAddressLine2;
            user.UserPostalCode = entity.UserPostalCode;
            user.ArtistBio = entity.ArtistBio;
            user.SuburbID = entity.SuburbID;
            user.UserTypeID = entity.UserTypeID;

            _artechDb.SaveChanges();

        }

        IEnumerable<User> IAppRepository<User>.GetByString(string str)
        {

            if (str.Contains("stringemail"))

            {
               string email =  str.Replace("stringemail","");

                return _artechDb.User.Where(s => s.UserEmail== email).ToList();
            }

            if (str.Contains("stringusername"))

            {
                string username = str.Replace("stringusername", "");

                return _artechDb.User.Where(s => s.UserName == username).ToList();
            }


            return null;
            


        }

    }
}
