using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtClassesControllers
{
    [Route("api/ArtClassAnnouncement")]
    [ApiController]
    public class ArtClassAnnouncementController : ControllerBase
    {
        private readonly IAppRepository<ArtClassAnnouncement> _appRepository;

        public ArtClassAnnouncementController(IAppRepository<ArtClassAnnouncement> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ArtClassAnnouncement
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtClassAnnouncement> artClassAnnouncements = _appRepository.GetAll();

            return Ok(artClassAnnouncements);
        }

        // GET: api/ArtClassAnnouncement/{id}

        [HttpGet("{id}", Name = "GetArtClassAnnouncement")]
        public IActionResult Get(long id)
        {
            ArtClassAnnouncement artClassAnnouncement = _appRepository.Get(id);


            if (artClassAnnouncement == null)
            {
                return NotFound("Requested Art Class Announcement does not exist.");
            }

            return Ok(artClassAnnouncement);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtClassAnnouncement artClassAnnouncement)
        {
            if (artClassAnnouncement == null)
            {
                return BadRequest("Art Class Announcement is null.");
            }
            _appRepository.Add(artClassAnnouncement);
            return CreatedAtRoute(
                  "GetArtClassAnnouncement",
                  new { Id = artClassAnnouncement.ArtClassAnnouncementID },
                  artClassAnnouncement);
        }

        // PUT: api/ArtClassAnnouncement/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtClassAnnouncement artClassAnnouncement)
        {
            if (artClassAnnouncement == null)
            {
                return BadRequest("Art Class Announcement is null.");
            }
            ArtClassAnnouncement artClassAnnouncementToUpdate = _appRepository.Get(id);
            if (artClassAnnouncementToUpdate == null)
            {
                return NotFound("The Art Class Announcement record couldn't be found.");
            }
            _appRepository.Update(artClassAnnouncementToUpdate, artClassAnnouncement);

            return NoContent();
        }


        // DELETE: api/ArtClassAnnouncement/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtClassAnnouncement artClassAnnouncement = _appRepository.Get(id);
            if (artClassAnnouncement == null)
            {
                return NotFound("The Art Class Announcement does not exist.");
            }
            _appRepository.Delete(artClassAnnouncement);

            return NoContent();
        }
    }
}
