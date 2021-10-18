using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository
{
    public  class ImagesRepository : IImageRepository<Image> 
    {

        readonly ArtechDbContext _artechDb;


        public ImagesRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }


        public void Add(Image image)
        {

            _artechDb.Image.Add(image);

            _artechDb.SaveChanges();

        }
        public IEnumerable<Image> GetAll()

        {
            return _artechDb.Image.ToList();
        }

        public Image Get(long id)
        {
            return _artechDb.Image.FirstOrDefault(u => u.ImageID == id);
        }

    

        public void Update(Image image, Image entity)
        {
            image.ImageID = entity.ImageID;
            image.UserID = entity.UserID;
            image.ImageTypeID = entity.ImageTypeID;
            image.ImageContent = entity.ImageContent;
            _artechDb.SaveChanges();
        }

        public void Delete(Image image)
        {
            _artechDb.Image.Remove(image);
            _artechDb.SaveChanges();
        }



        public Image GetImageByUserId(long id)
        {
            return _artechDb.Image.FirstOrDefault(u => u.UserID == id);
        }
    }

       
    
}
