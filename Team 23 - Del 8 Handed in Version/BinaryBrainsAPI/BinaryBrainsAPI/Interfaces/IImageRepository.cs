using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Interfaces
{
    public interface IImageRepository<TEntity> where TEntity: class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);

        TEntity GetImageByUserId(long id);

        void Add(TEntity entity);

        void Update(TEntity dbEntity, TEntity entity);
        void Delete(TEntity entity);

        

    }
}
