using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/City")]
    [EnableCors("MyCorsPolicy")]
    public class CityController : Controller
    {
        private readonly IAppRepository<City> _appRepository;

        public CityController(IAppRepository<City> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/City
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<City> cities = _appRepository.GetAll();

            return Ok(cities);
        }

        // GET: api/City/{id}

        [HttpGet("{id}", Name = "GetCity")]
        public IActionResult Get(long id)
        {
            City city = _appRepository.Get(id);


            if (city == null)
            {
                return NotFound("Requested City does not exist.");
            }

            return Ok(city);
        }

        // GET: api/City
        [HttpPost]
        public IActionResult Post([FromBody] City city)
        {
            if (city == null)
            {
                return BadRequest("City is null.");
            }
            _appRepository.Add(city);
            return CreatedAtRoute(
                  "GetCity",
                  new { Id = city.CityID },
                  city);
        }

        // PUT: api/City/{5}
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] City city)
        {
            if (city == null)
            {
                return BadRequest("City is null.");
            }

            City cityToUpdate = _appRepository.Get(id);
            if (cityToUpdate == null)
            {
                return NotFound("The City does not exist.");
            }
            _appRepository.Update(cityToUpdate, city);

            return NoContent();
        }


        // DELETE: api/City/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            City city = _appRepository.Get(id);
            if (city == null)
            {
                return NotFound("The city does not exist.");
            }
            _appRepository.Delete(city);

            return NoContent();
        }
    }
}
