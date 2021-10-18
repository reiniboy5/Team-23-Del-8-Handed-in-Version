using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ScheduleRepository : IAppRepository<Schedule>
    {
        readonly ArtechDbContext _artechDb;


        public ScheduleRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Schedule schedule)
        {
            _artechDb.Schedule.Add(schedule);
            _artechDb.SaveChanges();
        }

        public void Delete(Schedule schedule)
        {
            _artechDb.Schedule.Remove(schedule);
            _artechDb.SaveChanges();
        }

        public Schedule Get(long id)
        {
            return _artechDb.Schedule.FirstOrDefault(s => s.ScheduleID == id);
        }

        public IEnumerable<Schedule> GetAll()
        {
            return _artechDb.Schedule.ToList();
        }

        public Schedule GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Schedule schedule, Schedule entity)
        {
            schedule.ScheduleName = entity.ScheduleName;
            schedule.ScheduleDescription = entity.ScheduleDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<Schedule> IAppRepository<Schedule>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
