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
    [Route("api/Schedule")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IAppRepository<Schedule> _appRepository;

        public ScheduleController(IAppRepository<Schedule> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Schedule
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Schedule> schedules = _appRepository.GetAll();

            return Ok(schedules);
        }

        // GET: api/Schedule/{id}

        [HttpGet("{id}", Name = "GetSchedule")]
        public IActionResult Get(long id)
        {
            Schedule schedule = _appRepository.Get(id);


            if (schedule == null)
            {
                return NotFound("Requested Schedule does not exist.");
            }

            return Ok(schedule);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Schedule schedule)
        {
            if (schedule == null)
            {
                return BadRequest("Schedule is null.");
            }
            _appRepository.Add(schedule);
            return CreatedAtRoute(
                  "GetSchedule",
                  new { Id = schedule.ScheduleID },
                  schedule);
        }

        // PUT: api/Schedule/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Schedule schedule)
        {
            if (schedule == null)
            {
                return BadRequest("Schedule is null.");
            }

            Schedule scheduleToUpdate = _appRepository.Get(id);
            if (scheduleToUpdate == null)
            {
                return NotFound("The Schedule does not exist.");
            }
            _appRepository.Update(scheduleToUpdate, schedule);

            return NoContent();
        }


        // DELETE: api/Schedule/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Schedule schedule = _appRepository.Get(id);
            if (schedule == null)
            {
                return NotFound("The Schedule does not exist.");
            }
            _appRepository.Delete(schedule);

            return NoContent();
        }
    }
}
