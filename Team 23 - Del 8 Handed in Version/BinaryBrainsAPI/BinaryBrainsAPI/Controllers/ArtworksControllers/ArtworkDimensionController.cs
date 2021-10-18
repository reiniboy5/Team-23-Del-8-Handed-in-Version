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
    [Route("api/ArtworkDimension")]
    [ApiController]
    public class ArtworkDimensionController : ControllerBase
    {
        private readonly IAppRepository<ArtworkDimension> _appRepository;

        public ArtworkDimensionController(IAppRepository<ArtworkDimension> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ArtworkDimension
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtworkDimension> artworkDimensions = _appRepository.GetAll();

            return Ok(artworkDimensions);
        }

        // GET: api/ArtworkDimension/{id}

        [HttpGet("{id}", Name = "GetArtworkDimension")]
        public IActionResult Get(long id)
        {
            ArtworkDimension artworkDimension = _appRepository.Get(id);


            if (artworkDimension == null)
            {
                return NotFound("Requested Artwork Dimension does not exist.");
            }

            return Ok(artworkDimension);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtworkDimension artworkDimension)
        {
            if (artworkDimension == null)
            {
                return BadRequest("Artwork Dimension is null.");
            }
            _appRepository.Add(artworkDimension);
            return CreatedAtRoute(
                  "GetArtworkDimension",
                  new { Id = artworkDimension.ArtworkDimensionID },
                  artworkDimension);
        }

        // PUT: api/ArtworkDimension/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtworkDimension artworkDimension)
        {
            if (artworkDimension == null)
            {
                return BadRequest("Artwork Dimension is null.");
            }

            ArtworkDimension artworkDimensionToUpdate = _appRepository.Get(id);
            if (artworkDimensionToUpdate == null)
            {
                return NotFound("The Artwork Dimension does not exist.");
            }
            _appRepository.Update(artworkDimensionToUpdate, artworkDimension);

            return NoContent();
        }


        // DELETE: api/ArtworkDimension/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtworkDimension artworkDimension = _appRepository.Get(id);
            if (artworkDimension == null)
            {
                return NotFound("The Artwork Dimension does not exist.");
            }
            _appRepository.Delete(artworkDimension);

            return NoContent();
        }
    }
}
