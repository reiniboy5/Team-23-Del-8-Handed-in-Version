using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class CityRepository : IAppRepository<City>
    {
        readonly ArtechDbContext _artechDb;


        public CityRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(City city)
        {
            _artechDb.City.Add(city);
            _artechDb.SaveChanges();
        }

        public void Delete(City city)
        {
            _artechDb.City.Remove(city);
            _artechDb.SaveChanges();
        }

        public City Get(long id)
        {
            return _artechDb.City.FirstOrDefault(c => c.CityID == id);
        }

        public IEnumerable<City> GetAll()
        {
            return _artechDb.City.ToList();
        }

        public City GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(City city, City entity)
        {
            city.CityName = entity.CityName;
            _artechDb.SaveChanges();
        }

        IEnumerable<City> IAppRepository<City>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
