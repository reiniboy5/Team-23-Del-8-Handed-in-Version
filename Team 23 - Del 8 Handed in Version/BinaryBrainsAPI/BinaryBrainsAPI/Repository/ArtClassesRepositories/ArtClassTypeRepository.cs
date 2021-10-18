using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtClassesRepositories
{
    public class ArtClassTypeRepository : IAppRepository<ArtClassType>
    {
        readonly ArtechDbContext _artechDb;


        public ArtClassTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ArtClassType artClassType)
        {
            _artechDb.ArtClassType.Add(artClassType);
            _artechDb.SaveChanges();
        }

        public void Delete(ArtClassType artClassType)
        {
            _artechDb.ArtClassType.Remove(artClassType);
            _artechDb.SaveChanges();
        }

        public ArtClassType Get(long id)
        {
            return _artechDb.ArtClassType.FirstOrDefault(s => s.ArtClassTypeID == id);
        }

        public IEnumerable<ArtClassType> GetAll()
        {
            return _artechDb.ArtClassType.ToList();
        }

        public ArtClassType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ArtClassType artClassType, ArtClassType entity)
        {
            artClassType.ArtClassTypeDescription = entity.ArtClassTypeDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<ArtClassType> IAppRepository<ArtClassType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
