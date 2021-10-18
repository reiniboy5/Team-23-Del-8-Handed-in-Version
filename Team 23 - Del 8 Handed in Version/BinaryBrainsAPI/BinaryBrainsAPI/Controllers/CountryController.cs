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

    [Route("api/Country")]
    [EnableCors("MyCorsPolicy")]
    public class CountryController : Controller
    {
        private readonly IAppRepository<Country> _appRepository;

        public CountryController(IAppRepository<Country> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Country
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Country> countrys = _appRepository.GetAll();

            return Ok(countrys);
        }

        // GET: api/Country/{id}

        [HttpGet("{id}", Name = "GetCountry")]
        public IActionResult Get(long id)
        {
            Country country = _appRepository.Get(id);


            if (country == null)
            {
                return NotFound("Requested Country does not exist.");
            }

            return Ok(country);
        }

        // GET: api/Country
        [HttpPost]
        public IActionResult Post([FromBody] Country country)
        {
            if (country == null)
            {
                return BadRequest("Country is null.");
            }
            _appRepository.Add(country);
            return CreatedAtRoute(
                  "GetCountry",
                  new { Id = country.CountryID },
                  country);
        }

        // PUT: api/Country/{5}
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Country country)
        {
            if (country == null)
            {
                return BadRequest("Country is null.");
            }

            Country countryToUpdate = _appRepository.Get(id);
            if (countryToUpdate == null)
            {
                return NotFound("The Country does not exist.");
            }
            _appRepository.Update(countryToUpdate, country);

            return NoContent();
        }


        // DELETE: api/Country/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Country country = _appRepository.Get(id);
            if (country == null)
            {
                return NotFound("The country does not exist.");
            }
            _appRepository.Delete(country);

            return NoContent();
        }
    }
}
