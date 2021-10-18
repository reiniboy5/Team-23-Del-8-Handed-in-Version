using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities;
using BinaryBrainsAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ExhibitionRepository : IAppRepository<Exhibition>
    {
        readonly ArtechDbContext _artechDb;


        public ExhibitionRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Exhibition exhibition)
        {
            _artechDb.Exhibition.Add(exhibition);
            _artechDb.SaveChanges();
        }

        public void Delete(Exhibition exhibition)
        {
            _artechDb.Exhibition.Remove(exhibition);
            _artechDb.SaveChanges();
        }

        public Exhibition Get(long id)
        {
            return _artechDb.Exhibition.FirstOrDefault(s => s.ExhibitionID == id);
        }

        public IEnumerable<Exhibition> GetAll()
        {
            return _artechDb.Exhibition.Include(x => x.ExhibitionType).Include(s => s.Organisation).Include(a => a.Venue).Include(p => p.Schedule).ToList();
        }

        public Exhibition GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Exhibition exhibition, Exhibition entity)
        {
            exhibition.ExhibitionName = entity.ExhibitionName;
            exhibition.ExhibitionDescription = entity.ExhibitionDescription;
            exhibition.ExhibitionStartDateTime = entity.ExhibitionStartDateTime;
            exhibition.ExhibitionEndDateTime = entity.ExhibitionEndDateTime;
            exhibition.ExhibitionImage = entity.ExhibitionImage;
            _artechDb.SaveChanges();
        }

        IEnumerable<Exhibition> IAppRepository<Exhibition>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
