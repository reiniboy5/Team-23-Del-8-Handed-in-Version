using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class CountryRepository : IAppRepository<Country>
    {

        readonly ArtechDbContext _artechDb;


        public CountryRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Country country)
        {
            _artechDb.Country.Add(country);
            _artechDb.SaveChanges();
        }

        public void Delete(Country country)
        {
            _artechDb.Country.Remove(country);
            _artechDb.SaveChanges();
        }

        public Country Get(long id)
        {
            return _artechDb.Country.FirstOrDefault(s => s.CountryID == id);
        }

        public IEnumerable<Country> GetAll()
        {
            return _artechDb.Country.ToList();
        }

        public Country GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Country country, Country entity)
        {
            country.CountryName = entity.CountryName;
            _artechDb.SaveChanges();
        }

        IEnumerable<Country> IAppRepository<Country>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}