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
    [Route("api/ScheduleType")]
    [ApiController]
    public class ScheduleTypeController : ControllerBase
    {
        private readonly IAppRepository<ScheduleType> _appRepository;

        public ScheduleTypeController(IAppRepository<ScheduleType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ScheduleType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ScheduleType> scheduleTypes = _appRepository.GetAll();

            return Ok(scheduleTypes);
        }

        // GET: api/ScheduleType/{id}

        [HttpGet("{id}", Name = "GetScheduleType")]
        public IActionResult Get(long id)
        {
            ScheduleType scheduleType = _appRepository.Get(id);


            if (scheduleType == null)
            {
                return NotFound("Requested Schedule Type does not exist.");
            }

            return Ok(scheduleType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ScheduleType scheduleType)
        {
            if (scheduleType == null)
            {
                return BadRequest("Schedule Type is null.");
            }
            _appRepository.Add(scheduleType);
            return CreatedAtRoute(
                  "GetScheduleType",
                  new { Id = scheduleType.ScheduleTypeID },
                  scheduleType);
        }

        // PUT: api/ScheduleType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ScheduleType scheduleType)
        {
            if (scheduleType == null)
            {
                return BadRequest("Schedule Type is null.");
            }

            ScheduleType scheduleTypeToUpdate = _appRepository.Get(id);
            if (scheduleTypeToUpdate == null)
            {
                return NotFound("The Schedule Type does not exist.");
            }
            _appRepository.Update(scheduleTypeToUpdate, scheduleType);

            return NoContent();
        }


        // DELETE: api/ScheduleType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ScheduleType scheduleType = _appRepository.Get(id);
            if (scheduleType == null)
            {
                return NotFound("The Schedule Type does not exist.");
            }
            _appRepository.Delete(scheduleType);

            return NoContent();
        }
    }
}
