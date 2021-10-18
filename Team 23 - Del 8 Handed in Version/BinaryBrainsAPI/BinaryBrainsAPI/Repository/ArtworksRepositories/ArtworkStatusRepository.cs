using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtworksRepositories
{
    public class ArtworkStatusRepository : IAppRepository<ArtworkStatus>
    {
        readonly ArtechDbContext _artechDb;


        public ArtworkStatusRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ArtworkStatus artworkStatus)
        {
            _artechDb.ArtworkStatus.Add(artworkStatus);
            _artechDb.SaveChanges();
        }

        public void Delete(ArtworkStatus artworkStatus)
        {
            _artechDb.ArtworkStatus.Remove(artworkStatus);
            _artechDb.SaveChanges();
        }

        public ArtworkStatus Get(long id)
        {
            return _artechDb.ArtworkStatus.FirstOrDefault(s => s.ArtworkStatusID == id);
        }

        public IEnumerable<ArtworkStatus> GetAll()
        {
            return _artechDb.ArtworkStatus.ToList();
        }

        public ArtworkStatus GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ArtworkStatus artworkStatus, ArtworkStatus entity)
        {
            artworkStatus.ArtworkStatusDescription = entity.ArtworkStatusDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<ArtworkStatus> IAppRepository<ArtworkStatus>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
