using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ExhibitionAnnouncementRepository : IAppRepository<ExhibitionAnnouncement>
    {
        readonly ArtechDbContext _artechDb;


        public ExhibitionAnnouncementRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ExhibitionAnnouncement exhibitionAnnouncement)
        {
            _artechDb.ExhibitionAnnouncement.Add(exhibitionAnnouncement);
            _artechDb.SaveChanges();
        }

        public void Delete(ExhibitionAnnouncement exhibitionAnnouncement)
        {
            _artechDb.ExhibitionAnnouncement.Remove(exhibitionAnnouncement);
            _artechDb.SaveChanges();
        }

        public ExhibitionAnnouncement Get(long id)
        {
            return _artechDb.ExhibitionAnnouncement.FirstOrDefault(s => s.ExhibitionAnnouncementID == id);
        }

        public IEnumerable<ExhibitionAnnouncement> GetAll()
        {
            return _artechDb.ExhibitionAnnouncement.ToList();
        }

        public ExhibitionAnnouncement GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ExhibitionAnnouncement exhibitionAnnouncement, ExhibitionAnnouncement entity)
        {
            exhibitionAnnouncement.ExhibitionAnnouncementDescription = entity.ExhibitionAnnouncementDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<ExhibitionAnnouncement> IAppRepository<ExhibitionAnnouncement>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
