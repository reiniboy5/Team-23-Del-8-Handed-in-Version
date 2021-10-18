using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ScheduleTypeRepository : IAppRepository<ScheduleType>
    {
        readonly ArtechDbContext _artechDb;


        public ScheduleTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ScheduleType scheduleType)
        {
            _artechDb.ScheduleType.Add(scheduleType);
            _artechDb.SaveChanges();
        }

        public void Delete(ScheduleType scheduleType)
        {
            _artechDb.ScheduleType.Remove(scheduleType);
            _artechDb.SaveChanges();
        }

        public ScheduleType Get(long id)
        {
            return _artechDb.ScheduleType.FirstOrDefault(s => s.ScheduleTypeID == id);
        }

        public IEnumerable<ScheduleType> GetAll()
        {
            return _artechDb.ScheduleType.ToList();
        }

        public ScheduleType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ScheduleType scheduleType, ScheduleType entity)
        {
            scheduleType.ScheduleTypeDescription = entity.ScheduleTypeDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<ScheduleType> IAppRepository<ScheduleType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
