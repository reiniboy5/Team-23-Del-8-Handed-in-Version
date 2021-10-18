using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtworksRepositories
{
    public class FrameColourRepository : IAppRepository<FrameColour>
    {
        readonly ArtechDbContext _artechDb;


        public FrameColourRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(FrameColour frameColour)
        {
            _artechDb.FrameColour.Add(frameColour);
            _artechDb.SaveChanges();
        }

        public void Delete(FrameColour frameColour)
        {
            _artechDb.FrameColour.Remove(frameColour);
            _artechDb.SaveChanges();
        }

        public FrameColour Get(long id)
        {
            return _artechDb.FrameColour.FirstOrDefault(s => s.FrameColourID == id);
        }

        public IEnumerable<FrameColour> GetAll()
        {
            return _artechDb.FrameColour.ToList();
        }

        public FrameColour GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(FrameColour frameColour, FrameColour entity)
        {
            frameColour.FrameColourDescription = entity.FrameColourDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<FrameColour> IAppRepository<FrameColour>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
