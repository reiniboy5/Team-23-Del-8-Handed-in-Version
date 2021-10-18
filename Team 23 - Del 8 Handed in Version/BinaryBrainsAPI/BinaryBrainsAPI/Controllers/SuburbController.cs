using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/Surburb")]
    [EnableCors("MyCorsPolicy")]
    public class SuburbController : Controller
    {
        private readonly IAppRepository<Suburb> _appRepository;

        public SuburbController(IAppRepository<Suburb> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Suburb
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Suburb> suburbs = _appRepository.GetAll();

            return Ok(suburbs);
        }

        // GET: api/Suburb/{id}

        [HttpGet("{id}", Name = "GetSuburb")]
        public IActionResult Get(long id)
        {
            Suburb suburb = _appRepository.Get(id);


            if (suburb == null)
            {
                return NotFound("Requested Surburb does not exist.");
            }

            return Ok(suburb);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Suburb suburb)
        {
            if (suburb == null)
            {
                return BadRequest("Suburb is null.");
            }
            _appRepository.Add(suburb);
            return CreatedAtRoute(
                  "GetSuburb",
                  new { Id = suburb.SuburbID },
                  suburb);
        }

        // PUT: api/Suburb/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Suburb suburb)
        {
            if (suburb == null)
            {
                return BadRequest("Suburb is null.");
            }

            Suburb suburbToUpdate = _appRepository.Get(id);
            if (suburbToUpdate == null)
            {
                return NotFound("The Suburb does not exist.");
            }
            _appRepository.Update(suburbToUpdate, suburb);

            return NoContent();
        }


        // DELETE: api/Suburb/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Suburb suburb = _appRepository.Get(id);
            if (suburb == null)
            {
                return NotFound("The suburb does not exist.");
            }
            _appRepository.Delete(suburb);

            return NoContent();
        }

    }
}
