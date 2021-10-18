using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtClassesRepositories
{
    public class ArtClassRepository : IAppRepository<ArtClass>
    {
        readonly ArtechDbContext _artechDb;


        public ArtClassRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ArtClass artClass)
        {
            _artechDb.ArtClass.Add(artClass);
            _artechDb.SaveChanges();
        }

        public void Delete(ArtClass artClass)
        {
            _artechDb.ArtClass.Remove(artClass);
            _artechDb.SaveChanges();

        }

        public ArtClass Get(long id)
        {
            return _artechDb.ArtClass.FirstOrDefault(u => u.ArtClassID == id);
        }

        public IEnumerable<ArtClass> GetAll()
        {
            return _artechDb.ArtClass.Include(x => x.ArtClassType).Include(v => v.Venue).Include(o => o.Organisation).Include(t => t.ClassTeacher).ToList();
        }

        public ArtClass GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ArtClass artClass, ArtClass entity)
        {
            artClass.ArtClassName = entity.ArtClassName;
            artClass.ArtClassDescription = entity.ArtClassDescription;
            artClass.ArtClassStartDateTime = entity.ArtClassStartDateTime;
            artClass.ArtClassEndDateTime = entity.ArtClassEndDateTime;
            artClass.ArtClassImage = entity.ArtClassImage;
            artClass.ClassLimit = entity.ClassLimit;
            artClass.RefundDayLimit = entity.RefundDayLimit;
            artClass.ClassPrice = entity.ClassPrice;
            _artechDb.SaveChanges();
        }

        IEnumerable<ArtClass> IAppRepository<ArtClass>.GetByString(string str)
        {
            return _artechDb.ArtClass.Where(m => m.ClassTeacherID == Int32.Parse(str)).ToList();
        }
    }
}
