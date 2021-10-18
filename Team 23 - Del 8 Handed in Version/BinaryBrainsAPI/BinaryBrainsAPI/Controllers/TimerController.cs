using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimerController : ControllerBase
    {
        private readonly IAppRepository<Timer> _appRepository;

        public TimerController(IAppRepository<Timer> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Timer
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Timer> timer = _appRepository.GetAll();

            return Ok(timer);
        }

        // GET: api/Timer/{id}

        [HttpGet("{id}", Name = "GetTimer")]
        public IActionResult Get(long id)
        {
            Timer timer = _appRepository.Get(id);


            if (timer == null)
            {
                return NotFound("Requested Timer does not exist.");
            }

            return Ok(timer);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Timer timer)
        {
            if (timer == null)
            {
                return BadRequest("Timer is null.");
            }
            _appRepository.Add(timer);
            return CreatedAtRoute(
                  "GetTimer",
                  new { Id = timer.TimerID },
                  timer);
        }

        // PUT: api/Timer/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Timer timer)
        {
            if (timer == null)
            {
                return BadRequest("Timer is null.");
            }
            Timer timerToUpdate = _appRepository.Get(id);
            if (timerToUpdate == null)
            {
                return NotFound("The Timer record couldn't be found.");
            }
            _appRepository.Update(timerToUpdate, timer);

            return NoContent();
        }


        // DELETE: api/Timer/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Timer timer = _appRepository.Get(id);
            if (timer == null)
            {
                return NotFound("The Timer does not exist.");
            }
            _appRepository.Delete(timer);

            return NoContent();
        }
    }
}

