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
    [Route("api/ArtworkStatus")]
    [ApiController]
    public class ArtworkStatusController : ControllerBase
    {
        private readonly IAppRepository<ArtworkStatus> _appRepository;

        public ArtworkStatusController(IAppRepository<ArtworkStatus> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ArtworkStatus
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtworkStatus> artworkStatuses = _appRepository.GetAll();

            return Ok(artworkStatuses);
        }

        // GET: api/ArtworkStatus/{id}

        [HttpGet("{id}", Name = "GetArtworkStatus")]
        public IActionResult Get(long id)
        {
            ArtworkStatus artworkStatus = _appRepository.Get(id);


            if (artworkStatus == null)
            {
                return NotFound("Requested Artwork Status does not exist.");
            }

            return Ok(artworkStatus);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtworkStatus artworkStatus)
        {
            if (artworkStatus == null)
            {
                return BadRequest("Artwork Status is null.");
            }
            _appRepository.Add(artworkStatus);
            return CreatedAtRoute(
                  "GetArtworkStatus",
                  new { Id = artworkStatus.ArtworkStatusID },
                  artworkStatus);
        }

        // PUT: api/ArtworkStatus/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtworkStatus artworkStatus)
        {
            if (artworkStatus == null)
            {
                return BadRequest("Artwork Status is null.");
            }

            ArtworkStatus artworkStatusToUpdate = _appRepository.Get(id);
            if (artworkStatusToUpdate == null)
            {
                return NotFound("The Artwork Status does not exist.");
            }
            _appRepository.Update(artworkStatusToUpdate, artworkStatus);

            return NoContent();
        }


        // DELETE: api/ArtworkStatus/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtworkStatus artworkStatus = _appRepository.Get(id);
            if (artworkStatus == null)
            {
                return NotFound("The Artwork Status does not exist.");
            }
            _appRepository.Delete(artworkStatus);

            return NoContent();
        }
    }
}
