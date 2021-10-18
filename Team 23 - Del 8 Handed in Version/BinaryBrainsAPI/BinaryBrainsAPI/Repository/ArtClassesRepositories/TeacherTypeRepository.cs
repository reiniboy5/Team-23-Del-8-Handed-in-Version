using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtClassesRepositories
{
    public class TeacherTypeRepository : IAppRepository<TeacherType>
    {
        readonly ArtechDbContext _artechDb;


        public TeacherTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(TeacherType teacherType)
        {
            _artechDb.TeacherType.Add(teacherType);
            _artechDb.SaveChanges();
        }

        public void Delete(TeacherType teacherType)
        {
            _artechDb.TeacherType.Remove(teacherType);
            _artechDb.SaveChanges();
        }

        public TeacherType Get(long id)
        {
            return _artechDb.TeacherType.FirstOrDefault(s => s.TeacherTypeID == id);
        }

        public IEnumerable<TeacherType> GetAll()
        {
            return _artechDb.TeacherType.ToList();
        }

        public TeacherType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(TeacherType teacherType, TeacherType entity)
        {
            teacherType.TeacherTypeDescription = entity.TeacherTypeDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<TeacherType> IAppRepository<TeacherType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
