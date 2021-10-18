using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ImagesControllers
{
    [Route("api/ImageType")]
    [EnableCors("MyCorsPolicy")]
    public class ImageTypeController : ControllerBase
    {
        private readonly IAppRepository<ImageType> _appRepository;

        public ImageTypeController(IAppRepository<ImageType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ImageType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ImageType> imageTypes = _appRepository.GetAll();

            return Ok(imageTypes);
        }

        // GET: api/ImageType/{id}

        [HttpGet("{id}", Name = "GetImageType")]
        public IActionResult Get(long id)
        {
            ImageType imageType = _appRepository.Get(id);


            if (imageType == null)
            {
                return NotFound("Requested Image Type does not exist.");
            }

            return Ok(imageType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ImageType imageType)
        {
            if (imageType == null)
            {
                return BadRequest("Image Type is null.");
            }
            _appRepository.Add(imageType);
            return CreatedAtRoute(
                  "GetImageType",
                  new { Id = imageType.ImageTypeID },
                  imageType);
        }

        // PUT: api/ImageType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ImageType imageType)
        {
            if (imageType == null)
            {
                return BadRequest("Image Type is null.");
            }

            ImageType imageTypeToUpdate = _appRepository.Get(id);
            if (imageTypeToUpdate == null)
            {
                return NotFound("The Image Type does not exist.");
            }
            _appRepository.Update(imageTypeToUpdate, imageType);

            return NoContent();
        }


        // DELETE: api/ImageType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ImageType imageType = _appRepository.Get(id);
            if (imageType == null)
            {
                return NotFound("The Image Type does not exist.");
            }
            _appRepository.Delete(imageType);

            return NoContent();
        }
    }
}
