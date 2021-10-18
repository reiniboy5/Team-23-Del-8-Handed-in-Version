using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ExhibitionsControllers
{
    [Route("api/ApplicationStatus")]
    [ApiController]
    public class ApplicationStatusController : ControllerBase
    {
        private readonly IAppRepository<ApplicationStatus> _appRepository;

        public ApplicationStatusController(IAppRepository<ApplicationStatus> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ApplicationStatus
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ApplicationStatus> applicationStatuses = _appRepository.GetAll();

            return Ok(applicationStatuses);
        }

        // GET: api/ApplicationStatus/{id}

        [HttpGet("{id}", Name = "GetApplicationStatus")]
        public IActionResult Get(long id)
        {
            ApplicationStatus applicationStatus = _appRepository.Get(id);


            if (applicationStatus == null)
            {
                return NotFound("Requested Application Status does not exist.");
            }

            return Ok(applicationStatus);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ApplicationStatus applicationStatus)
        {
            if (applicationStatus == null)
            {
                return BadRequest("Application Status is null.");
            }
            _appRepository.Add(applicationStatus);
            return CreatedAtRoute(
                  "GetApplicationStatus",
                  new { Id = applicationStatus.ApplicationStatusID },
                  applicationStatus);
        }

        // PUT: api/ApplicationStatus/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ApplicationStatus applicationStatus)
        {
            if (applicationStatus == null)
            {
                return BadRequest("Application Status is null.");
            }

            ApplicationStatus applicationStatusToUpdate = _appRepository.Get(id);
            if (applicationStatusToUpdate == null)
            {
                return NotFound("The Application Status does not exist.");
            }
            _appRepository.Update(applicationStatusToUpdate, applicationStatus);

            return NoContent();
        }


        // DELETE: api/ApplicationStatus/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ApplicationStatus applicationStatus = _appRepository.Get(id);
            if (applicationStatus == null)
            {
                return NotFound("The Application Status does not exist.");
            }
            _appRepository.Delete(applicationStatus);

            return NoContent();
        }
    }
}
