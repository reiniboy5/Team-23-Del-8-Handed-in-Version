using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtworksControllers
{
    [Route("api/ArtworkType")]
    [ApiController]
    public class ArtworkTypeController : ControllerBase
    {
        private readonly IAppRepository<ArtworkType> _appRepository;

        public ArtworkTypeController(IAppRepository<ArtworkType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ArtworkType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtworkType> artworkTypes = _appRepository.GetAll();

            return Ok(artworkTypes);
        }

        // GET: api/ArtworkType/{id}

        [HttpGet("{id}", Name = "GetArtworkType")]
        public IActionResult Get(long id)
        {
            ArtworkType artworkType = _appRepository.Get(id);


            if (artworkType == null)
            {
                return NotFound("Requested Artwork Type does not exist.");
            }

            return Ok(artworkType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtworkType artworkType)
        {
            if (artworkType == null)
            {
                return BadRequest("Artwork Type is null.");
            }
            _appRepository.Add(artworkType);
            return CreatedAtRoute(
                  "GetArtworkType",
                  new { Id = artworkType.ArtworkTypeID },
                  artworkType);
        }

        // PUT: api/ArtworkType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtworkType artworkType)
        {
            if (artworkType == null)
            {
                return BadRequest("Artwork Type is null.");
            }

            ArtworkType artworkTypeToUpdate = _appRepository.Get(id);
            if (artworkTypeToUpdate == null)
            {
                return NotFound("The Artwork Type does not exist.");
            }
            _appRepository.Update(artworkTypeToUpdate, artworkType);

            return NoContent();
        }


        // DELETE: api/ArtworkType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtworkType artworkType = _appRepository.Get(id);
            if (artworkType == null)
            {
                return NotFound("The Artwork Type does not exist.");
            }
            _appRepository.Delete(artworkType);

            return NoContent();
        }
    }
}
