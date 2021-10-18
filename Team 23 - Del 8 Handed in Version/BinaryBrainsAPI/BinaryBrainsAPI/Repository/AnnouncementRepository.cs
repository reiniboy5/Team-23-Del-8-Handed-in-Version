using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class AnnouncementRepository : IAppRepository<Announcement>
    {
        readonly ArtechDbContext _artechDb;


        public AnnouncementRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public IEnumerable<Announcement> GetAll()
        {

            return _artechDb.Announcement.ToList();
        }
        public void Add(Announcement announcement)
        {
            _artechDb.Announcement.Add(announcement);
            _artechDb.SaveChanges();
        }

        public void Delete(Announcement announcement)
        {
            _artechDb.Announcement.Remove(announcement);
            _artechDb.SaveChanges();

        }

        public Announcement Get(long id)
        {
            return _artechDb.Announcement.FirstOrDefault(u => u.AnnouncementID == id);
        }



        public void Update(Announcement announcement, Announcement entity)
        {
            announcement.AnnouncementTitle = entity.AnnouncementTitle;
            announcement.AnnouncementDescription = entity.AnnouncementDescription;
            _artechDb.SaveChanges();

        }

        public Announcement GetByString(string str)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Announcement> IAppRepository<Announcement>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
