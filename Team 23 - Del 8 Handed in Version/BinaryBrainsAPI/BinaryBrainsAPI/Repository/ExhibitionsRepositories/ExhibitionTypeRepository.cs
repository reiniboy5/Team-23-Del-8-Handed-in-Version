using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class ExhibitionTypeRepository : IAppRepository<ExhibitionType>
    {
        readonly ArtechDbContext _artechDb;


        public ExhibitionTypeRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ExhibitionType exhibitionType)
        {
            _artechDb.ExhibitionType.Add(exhibitionType);
            _artechDb.SaveChanges();
        }

        public void Delete(ExhibitionType exhibitionType)
        {
            _artechDb.ExhibitionType.Remove(exhibitionType);
            _artechDb.SaveChanges();
        }

        public ExhibitionType Get(long id)
        {
            return _artechDb.ExhibitionType.FirstOrDefault(s => s.ExhibitionTypeID == id);
        }

        public IEnumerable<ExhibitionType> GetAll()
        {
            return _artechDb.ExhibitionType.ToList();
        }

        public ExhibitionType GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ExhibitionType exhibitionType, ExhibitionType entity)
        {
            exhibitionType.ExhibitionTypeDecription = entity.ExhibitionTypeDecription;
            _artechDb.SaveChanges();
        }

        IEnumerable<ExhibitionType> IAppRepository<ExhibitionType>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
