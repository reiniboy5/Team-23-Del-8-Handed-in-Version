using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class ProvinceRepository : IAppRepository<Province>
    {
        readonly ArtechDbContext _artechDb;


        public ProvinceRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Province province)
        {
            _artechDb.Province.Add(province);
            _artechDb.SaveChanges();
        }

        public void Delete(Province province)
        {
            _artechDb.Province.Remove(province);
            _artechDb.SaveChanges();
        }

        public Province Get(long id)
        {
            return _artechDb.Province.FirstOrDefault(s => s.ProvinceID == id);
        }

        public IEnumerable<Province> GetAll()
        {
            return _artechDb.Province.ToList();
        }

        public Province GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Province province, Province entity)
        {
            province.ProvinceName = entity.ProvinceName;
            _artechDb.SaveChanges();
        }

        IEnumerable<Province> IAppRepository<Province>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
