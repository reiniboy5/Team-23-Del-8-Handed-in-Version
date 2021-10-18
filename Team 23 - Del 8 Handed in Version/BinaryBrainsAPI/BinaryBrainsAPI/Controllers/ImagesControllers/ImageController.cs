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
    [Route("api/Image")]
    [EnableCors("MyCorsPolicy")]
    public class ImageController : ControllerBase
    {
        private readonly IAppRepository<Image> _appRepository;

        public ImageController(IAppRepository<Image> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Image
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Image> images = _appRepository.GetAll();

            return Ok(images);
        }

        // GET: api/Image/{id}

        [HttpGet("{id}", Name = "GetImage")]
        public IActionResult Get(long id)
        {
            Image image = _appRepository.Get(id);


            if (image == null)
            {
                return NotFound("Requested Image does not exist.");
            }

            return Ok(image);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Image image)
        {
            if (image == null)
            {
                return BadRequest("Image is null.");
            }
            _appRepository.Add(image);
            return CreatedAtRoute(
                  "GetImage",
                  new { Id = image.ImageID },
                  image);
        }

        // PUT: api/Image/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Image image)
        {
            if (image == null)
            {
                return BadRequest("Image is null.");
            }

            Image imageToUpdate = _appRepository.Get(id);
            if (imageToUpdate == null)
            {
                return NotFound("The Image does not exist.");
            }
            _appRepository.Update(imageToUpdate, image);

            return NoContent();
        }


        // DELETE: api/Image/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Image image = _appRepository.Get(id);
            if (image == null)
            {
                return NotFound("The Image does not exist.");
            }
            _appRepository.Delete(image);

            return NoContent();
        }
    }
}
