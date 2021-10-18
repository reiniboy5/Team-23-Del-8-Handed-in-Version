using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public class TimerRepository : IAppRepository<Timer>
    {
        readonly ArtechDbContext _artechDb;


        public TimerRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Timer timer)
        {
            _artechDb.Timer.Add(timer);
            _artechDb.SaveChanges();
        }

        public void Delete(Timer timer)
        {
            _artechDb.Timer.Remove(timer);
            _artechDb.SaveChanges();
        }

        public Timer Get(long id)
        {
            return _artechDb.Timer.FirstOrDefault(u => u.TimerID == id);
        }

        public IEnumerable<Timer> GetAll()
        {
            return _artechDb.Timer.ToList();
        }

        public IEnumerable<Timer> GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Timer timer, Timer entity)
        {
            timer.TimerSet = entity.TimerSet;
            _artechDb.SaveChanges();
        }
    }
}
