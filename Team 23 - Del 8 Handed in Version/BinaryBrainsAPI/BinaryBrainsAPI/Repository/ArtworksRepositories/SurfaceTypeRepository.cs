using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtworksRepositories
{
    public class SurfaceTypeRepository : IAppRepository<SurfaceType>
    {
        readonly ArtechDbContext _artechDb;


        public SurfaceTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(SurfaceType surfaceType)
        {
            _artechDb.SurfaceType.Add(surfaceType);
            _artechDb.SaveChanges();
        }

        public void Delete(SurfaceType surfaceType)
        {
            _artechDb.SurfaceType.Remove(surfaceType);
            _artechDb.SaveChanges();
        }

        public SurfaceType Get(long id)
        {
            return _artechDb.SurfaceType.FirstOrDefault(s => s.SurfaceTypeID == id);
        }

        public IEnumerable<SurfaceType> GetAll()
        {
            return _artechDb.SurfaceType.ToList();
        }

        public SurfaceType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(SurfaceType surfaceType, SurfaceType entity)
        {
            surfaceType.SurfaceTypeName = entity.SurfaceTypeName;
            _artechDb.SaveChanges();
        }

        IEnumerable<SurfaceType> IAppRepository<SurfaceType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
