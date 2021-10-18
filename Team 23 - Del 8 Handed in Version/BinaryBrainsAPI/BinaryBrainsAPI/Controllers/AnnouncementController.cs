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
    [Route("api/Announcement")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IAppRepository<Announcement> _appRepository;

        public AnnouncementController(IAppRepository<Announcement> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Announcement
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Announcement> announcements = _appRepository.GetAll();

            return Ok(announcements);
        }

        // GET: api/Announcement/{id}

        [HttpGet("{id}", Name = "GetAnnouncement")]
        public IActionResult Get(long id)
        {
            Announcement announcement = _appRepository.Get(id);


            if (announcement == null)
            {
                return NotFound("Requested Announcement does not exist.");
            }

            return Ok(announcement);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement is null.");
            }
            _appRepository.Add(announcement);
            return CreatedAtRoute(
                  "GetAnnouncement",
                  new { Id = announcement.AnnouncementID },
                  announcement);
        }

        // PUT: api/Announcement/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement is null.");
            }
            Announcement announcementToUpdate = _appRepository.Get(id);
            if (announcementToUpdate == null)
            {
                return NotFound("The Announcement record couldn't be found.");
            }
            _appRepository.Update(announcementToUpdate, announcement);

            return NoContent();
        }


        // DELETE: api/Announcement/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Announcement announcement = _appRepository.Get(id);
            if (announcement == null)
            {
                return NotFound("The Announcement does not exist.");
            }
            _appRepository.Delete(announcement);

            return NoContent();
        }
    }
}
