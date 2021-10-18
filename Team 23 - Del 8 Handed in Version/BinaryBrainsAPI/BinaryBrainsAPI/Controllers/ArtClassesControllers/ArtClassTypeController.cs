using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtClassesControllers
{
    [Route("api/ArtClassType")]
    [EnableCors("MyCorsPolicy")]
    public class ArtClassTypeController : ControllerBase
    {
        private readonly IAppRepository<ArtClassType> _appRepository;

        public ArtClassTypeController(IAppRepository<ArtClassType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ArtClassType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtClassType> artClassTypes = _appRepository.GetAll();

            return Ok(artClassTypes);
        }

        // GET: api/ArtClassType/{id}

        [HttpGet("{id}", Name = "GetArtClassType")]
        public IActionResult Get(long id)
        {
            ArtClassType artClassType = _appRepository.Get(id);


            if (artClassType == null)
            {
                return NotFound("Requested Art Class Type does not exist.");
            }

            return Ok(artClassType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtClassType artClassType)
        {
            if (artClassType == null)
            {
                return BadRequest("Art Class Type is null.");
            }
            _appRepository.Add(artClassType);
            return CreatedAtRoute(
                  "GetArtClassType",
                  new { Id = artClassType.ArtClassTypeID },
                  artClassType);
        }

        // PUT: api/ArtClassType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtClassType artClassType)
        {
            if (artClassType == null)
            {
                return BadRequest("Art Class Type is null.");
            }

            ArtClassType artClassTypeToUpdate = _appRepository.Get(id);
            if (artClassTypeToUpdate == null)
            {
                return NotFound("The Art Class Type does not exist.");
            }
            _appRepository.Update(artClassTypeToUpdate, artClassType);

            return NoContent();
        }


        // DELETE: api/ArtClassType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtClassType artClassType = _appRepository.Get(id);
            if (artClassType == null)
            {
                return NotFound("The Art Class Type does not exist.");
            }
            _appRepository.Delete(artClassType);

            return NoContent();
        }
    }
}
