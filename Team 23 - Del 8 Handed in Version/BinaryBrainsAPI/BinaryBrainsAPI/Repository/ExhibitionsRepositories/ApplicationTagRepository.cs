using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ApplicationTagRepository : IAppRepository<ApplicationTag>
    {

        readonly ArtechDbContext _artechDb;


        public ApplicationTagRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ApplicationTag applicationTag)
        {
            _artechDb.ApplicationTag.Add(applicationTag);
            _artechDb.SaveChanges();
        }

        public void Delete(ApplicationTag applicationTag)
        {
            _artechDb.ApplicationTag.Remove(applicationTag);
            _artechDb.SaveChanges();
        }

        public ApplicationTag Get(long id)
        {
            return _artechDb.ApplicationTag.FirstOrDefault(s => s.ApplicationTagID== id);
        }

        public IEnumerable<ApplicationTag> GetAll()
        {
            return _artechDb.ApplicationTag.Include(x => x.Exhibition).Include(a => a.ExhibitionApplication.User).ToList();

           
        }

        public IEnumerable<ApplicationTag> GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ApplicationTag dbEntity, ApplicationTag applicationTag)
        {
            throw new NotImplementedException();
        }
    }
}
