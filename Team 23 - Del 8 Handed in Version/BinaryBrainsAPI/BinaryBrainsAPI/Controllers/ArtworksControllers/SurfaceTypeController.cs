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
    [Route("api/SurfaceType")]
    [ApiController]
    public class SurfaceTypeController : ControllerBase
    {
        private readonly IAppRepository<SurfaceType> _appRepository;
        private readonly IAppRepository<Artwork> _artworkRepository;

        public SurfaceTypeController(IAppRepository<SurfaceType> appRepository, IAppRepository<Artwork> artworkRepository)
        {
            _appRepository = appRepository;
            _artworkRepository = artworkRepository;
        }

        // GET: api/SurfaceType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<SurfaceType> surfaceTypes = _appRepository.GetAll();

            return Ok(surfaceTypes);
        }

        // GET: api/SurfaceType/{id}

        [HttpGet("{id}", Name = "GetSurfaceType")]
        public IActionResult Get(long id)
        {
            SurfaceType surfaceType = _appRepository.Get(id);


            if (surfaceType == null)
            {
                return NotFound("Requested Surface Type does not exist.");
            }

            return Ok(surfaceType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] SurfaceType surfaceType)
        {
            if (surfaceType == null)
            {
                return BadRequest("Surface Type is null.");
            }
            _appRepository.Add(surfaceType);
            return CreatedAtRoute(
                  "GetSurfaceType",
                  new { Id = surfaceType.SurfaceTypeID },
                  surfaceType);
        }

        // PUT: api/SurfaceType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] SurfaceType surfaceType)
        {
            if (surfaceType == null)
            {
                return BadRequest("Surface Type is null.");
            }

            SurfaceType surfaceTypeToUpdate = _appRepository.Get(id);
            if (surfaceTypeToUpdate == null)
            {
                return NotFound("The Surface Type does not exist.");
            }
            _appRepository.Update(surfaceTypeToUpdate, surfaceType);

            return NoContent();
        }


        // DELETE: api/SurfaceType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            IEnumerable<Artwork> artwork = _artworkRepository.GetByString(id.ToString());

            if (artwork.Count() > 0)
            {
                return BadRequest();
            }
            else
            {
                SurfaceType surfaceType = _appRepository.Get(id);
                _appRepository.Delete(surfaceType);
            }


  
            //if (surfaceType == null)
            //{
            //    return NotFound("This surface type does not exist");
            //}


            return NoContent();
        }
    }
}
