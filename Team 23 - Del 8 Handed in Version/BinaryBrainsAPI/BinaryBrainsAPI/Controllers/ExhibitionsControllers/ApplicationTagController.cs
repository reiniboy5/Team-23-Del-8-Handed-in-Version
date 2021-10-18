using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BinaryBrainsAPI.Controllers.ExhibitionsControllers
{
    [Route("api/ApplicationTag")]
    [EnableCors("MyCorsPolicy")]
    public class ApplicationTagController : ControllerBase
    {
        private readonly IAppRepository<ApplicationTag> _appRepository;
      

        public ApplicationTagController(IAppRepository<ApplicationTag> appRepository)
        {
            _appRepository = appRepository;
           
        }
        // GET: api/ApplicationTag
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ApplicationTag> applicationTags = _appRepository.GetAll();

            return Ok(applicationTags);


        }

        // GET api/ApplicationTag/5

        [HttpGet("{id}", Name = "GetApplicationTag")]
        public IActionResult Get(int id)
        {
            ApplicationTag applicationTag = _appRepository.Get(id);


            if (applicationTag == null)
            {
                return NotFound("Requested Exhibition Application does not exist.");
            }

            return Ok(applicationTag);
        }

        // POST api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ApplicationTag applicationTag) {

            if (applicationTag == null)
            {
                return BadRequest("Application tag is null.");
            }

            _appRepository.Add(applicationTag);
            return CreatedAtRoute(
                  "GetApplicationTag",
                  new { Id = applicationTag.ApplicationTagID },
                  applicationTag);
        }

        // PUT api/ApplicationTag/5
        
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ApplicationTag applicationTag)
        {
            if (applicationTag == null)
            {
                return BadRequest("Application Tag is null.");
            }

            ApplicationTag applicationTagToUpdate = _appRepository.Get(id);
            if (applicationTagToUpdate == null)
            {
                return NotFound("Application Tag does not exist.");
            }
            _appRepository.Update(applicationTagToUpdate, applicationTag);

            return Ok(applicationTag);
        }
        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ApplicationTag applicationTag = _appRepository.Get(id);
            if (applicationTag == null)
            {
                return NotFound("The tag does not exist.");
            }
            _appRepository.Delete(applicationTag);

            return NoContent();
        }
    }
}
