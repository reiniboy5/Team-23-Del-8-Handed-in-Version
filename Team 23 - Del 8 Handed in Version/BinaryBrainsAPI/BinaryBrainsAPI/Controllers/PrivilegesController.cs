using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/Privilege")]
    public class PrivilegesController : Controller
    {
        private readonly IAppRepository<Privileges> _appRepository;

        public PrivilegesController(IAppRepository<Privileges> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Privileges
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Privileges> privileges = _appRepository.GetAll();

            return Ok(privileges);
        }

        // GET: api/Privileges/{id}

        [HttpGet("{id}", Name = "GetPrivilege")]
        public IActionResult Get(long id)
        {
            Privileges privileges = _appRepository.Get(id);


            if (privileges == null)
            {
                return NotFound("Requested Privilege does not exist.");
            }

            return Ok(privileges);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Privileges privileges)
        {
            if (privileges == null)
            {
                return BadRequest("Privilege is null.");
            }
            _appRepository.Add(privileges);
            return CreatedAtRoute(
                  "GetPrivilege",
                  new { Id = privileges.PrivilegesID },
                  privileges);
        }

        // PUT: api/Privileges/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Privileges privileges)
        {
            if (privileges == null)
            {
                return BadRequest("Privileges is null.");
            }

            Privileges privilegesToUpdate = _appRepository.Get(id);
            if (privilegesToUpdate == null)
            {
                return NotFound("The Privilege does not exist.");
            }
            _appRepository.Update(privilegesToUpdate, privileges);

            return NoContent();
        }


        // DELETE: api/Privileges/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Privileges privileges = _appRepository.Get(id);
            if (privileges == null)
            {
                return NotFound("The privilege does not exist.");
            }
            _appRepository.Delete(privileges);

            return NoContent();
        }
    }
}
