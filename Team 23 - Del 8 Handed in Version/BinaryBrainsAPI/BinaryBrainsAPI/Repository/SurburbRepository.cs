using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class SurburbRepository : IAppRepository<Suburb>
    {
        readonly ArtechDbContext _artechDb;


        public SurburbRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Suburb suburb)
        {
            _artechDb.Suburb.Add(suburb);
            _artechDb.SaveChanges();
        }

        public void Delete(Suburb suburb)
        {
            _artechDb.Suburb.Remove(suburb);
            _artechDb.SaveChanges();
        }

        public Suburb Get(long id)
        {
            return _artechDb.Suburb.FirstOrDefault(s => s.SuburbID == id);
        }

        public IEnumerable<Suburb> GetAll()
        {
            return _artechDb.Suburb.ToList();
        }

        public Suburb GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Suburb suburb, Suburb entity)
        {
            suburb.SuburbName = entity.SuburbName;
            _artechDb.SaveChanges();
        }

        IEnumerable<Suburb> IAppRepository<Suburb>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
