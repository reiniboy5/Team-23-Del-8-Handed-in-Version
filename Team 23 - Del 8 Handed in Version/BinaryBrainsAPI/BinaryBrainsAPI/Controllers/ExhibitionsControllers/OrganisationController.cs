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
    [Route("api/Organisation")]
    [EnableCors("MyCorsPolicy")]
    public class OrganisationController : ControllerBase
    {
        private readonly IAppRepository<Organisation> _appRepository;

        public OrganisationController(IAppRepository<Organisation> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Organisation
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Organisation> organisations = _appRepository.GetAll();

            return Ok(organisations);
        }

        // GET: api/Organisation/{id}

        [HttpGet("{id}", Name = "GetOrganisation")]
        public IActionResult Get(long id)
        {
            Organisation organisation = _appRepository.Get(id);


            if (organisation == null)
            {
                return NotFound("Requested Organisation does not exist.");
            }

            return Ok(organisation);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Organisation organisation)
        {
            if (organisation == null)
            {
                return BadRequest("Organisation is null.");
            }
            _appRepository.Add(organisation);
            return CreatedAtRoute(
                  "GetOrganisation",
                  new { Id = organisation.OrganisationID },
                  organisation);
        }

        // PUT: api/Organisation/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Organisation organisation)
        {
            if (organisation == null)
            {
                return BadRequest("Organisation is null.");
            }

            Organisation organisationToUpdate = _appRepository.Get(id);
            if (organisationToUpdate == null)
            {
                return NotFound("The Organisation does not exist.");
            }
            _appRepository.Update(organisationToUpdate, organisation);

            return NoContent();
        }


        // DELETE: api/Organisation/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Organisation organisation = _appRepository.Get(id);
            if (organisation == null)
            {
                return NotFound("The Organisation does not exist.");
            }
            _appRepository.Delete(organisation);

            return NoContent();
        }
    }
}
