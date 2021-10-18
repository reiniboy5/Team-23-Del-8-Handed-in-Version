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
    [Route("api/ExhibitionAnnouncement")]
    [ApiController]
    public class ExhibitionAnnouncementController : ControllerBase
    {
        private readonly IAppRepository<ExhibitionAnnouncement> _appRepository;

        public ExhibitionAnnouncementController(IAppRepository<ExhibitionAnnouncement> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ExhibitionAnnouncement
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ExhibitionAnnouncement> exhibitionAnnouncements = _appRepository.GetAll();

            return Ok(exhibitionAnnouncements);
        }

        // GET: api/ExhibitionAnnouncement/{id}

        [HttpGet("{id}", Name = "GetExhibitionAnnouncement")]
        public IActionResult Get(long id)
        {
            ExhibitionAnnouncement exhibitionAnnouncement = _appRepository.Get(id);


            if (exhibitionAnnouncement == null)
            {
                return NotFound("Requested Exhibition Announcement does not exist.");
            }

            return Ok(exhibitionAnnouncement);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ExhibitionAnnouncement exhibitionAnnouncement)
        {
            if (exhibitionAnnouncement == null)
            {
                return BadRequest("Exhibition Announcement is null.");
            }
            _appRepository.Add(exhibitionAnnouncement);
            return CreatedAtRoute(
                  "GetExhibitionAnnouncement",
                  new { Id = exhibitionAnnouncement.ExhibitionAnnouncementID },
                  exhibitionAnnouncement);
        }

        // PUT: api/ExhibitionAnnouncement/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ExhibitionAnnouncement exhibitionAnnouncement)
        {
            if (exhibitionAnnouncement == null)
            {
                return BadRequest("Exhibition Announcement is null.");
            }

            ExhibitionAnnouncement exhibitionAnnouncementToUpdate = _appRepository.Get(id);
            if (exhibitionAnnouncementToUpdate == null)
            {
                return NotFound("The Exhibition Announcement does not exist.");
            }
            _appRepository.Update(exhibitionAnnouncementToUpdate, exhibitionAnnouncement);

            return NoContent();
        }


        // DELETE: api/ExhibitionAnnouncement/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ExhibitionAnnouncement exhibitionAnnouncement = _appRepository.Get(id);
            if (exhibitionAnnouncement == null)
            {
                return NotFound("The Exhibition Announcement does not exist.");
            }
            _appRepository.Delete(exhibitionAnnouncement);

            return NoContent();
        }
    }
}
