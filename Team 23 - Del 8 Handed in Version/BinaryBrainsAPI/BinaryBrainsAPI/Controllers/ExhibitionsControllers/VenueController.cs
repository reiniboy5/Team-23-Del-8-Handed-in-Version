using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ExhibitionsControllers
{
    [Route("api/Venue")]
    [EnableCors("MyCorsPolicy")]
    public class VenueController : ControllerBase
    {
        private readonly IAppRepository<Venue> _appRepository;

        public VenueController(IAppRepository<Venue> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Venue
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Venue> venues = _appRepository.GetAll();

            return Ok(venues);
        }

        // GET: api/Venue/{id}

        [HttpGet("{id}", Name = "GetVenue")]
        public IActionResult Get(long id)
        {
            Venue venue = _appRepository.Get(id);


            if (venue == null)
            {
                return NotFound("Requested Venue does not exist.");
            }

            return Ok(venue);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Venue venue)
        {
            if (venue == null)
            {
                return BadRequest("Venue is null.");
            }
            _appRepository.Add(venue);
            return CreatedAtRoute(
                  "GetVenue",
                  new { Id = venue.VenueID },
                  venue);
        }

        // PUT: api/Venue/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Venue venue)
        {
            if (venue == null)
            {
                return BadRequest("Venue is null.");
            }

            Venue venueToUpdate = _appRepository.Get(id);
            if (venueToUpdate == null)
            {
                return NotFound("The Venue does not exist.");
            }
            _appRepository.Update(venueToUpdate, venue);

            return NoContent();
        }


        // DELETE: api/Venue/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Venue venue = _appRepository.Get(id);
            if (venue == null)
            {
                return NotFound("The Venue does not exist.");
            }
            _appRepository.Delete(venue);

            return NoContent();
        }
    }
}
