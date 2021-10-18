using BinaryBrainsAPI.Entities.Artists;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtistsControllers
{
    [Route("api/InvitationStatus")]
    [ApiController]
    public class InvitationStatusController : ControllerBase
    {
        private readonly IAppRepository<InvitationStatus> _appRepository;

        public InvitationStatusController(IAppRepository<InvitationStatus> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/InvitationStatus
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<InvitationStatus> invitationStatuses = _appRepository.GetAll();

            return Ok(invitationStatuses);
        }

        // GET: api/InvitationStatus/{id}

        [HttpGet("{id}", Name = "GetInvitationStatus")]
        public IActionResult Get(long id)
        {
            InvitationStatus invitationStatus = _appRepository.Get(id);


            if (invitationStatus == null)
            {
                return NotFound("Requested Invitation Status does not exist.");
            }

            return Ok(invitationStatus);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] InvitationStatus invitationStatus)
        {
            if (invitationStatus == null)
            {
                return BadRequest("Invitation Status is null.");
            }
            _appRepository.Add(invitationStatus);
            return CreatedAtRoute(
                  "GetInvitationStatus",
                  new { Id = invitationStatus.InvitationStatusID },
                  invitationStatus);
        }

        // PUT: api/InvitationStatus/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] InvitationStatus invitationStatus)
        {
            if (invitationStatus == null)
            {
                return BadRequest("Invitation Status is null.");
            }

            InvitationStatus invitationStatusToUpdate = _appRepository.Get(id);
            if (invitationStatusToUpdate == null)
            {
                return NotFound("The Invitation Status does not exist.");
            }
            _appRepository.Update(invitationStatusToUpdate, invitationStatus);

            return NoContent();
        }


        // DELETE: api/InvitationStatus/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            InvitationStatus invitationStatus = _appRepository.Get(id);
            if (invitationStatus == null)
            {
                return NotFound("The Invitation Status does not exist.");
            }
            _appRepository.Delete(invitationStatus);

            return NoContent();
        }
    }
}
