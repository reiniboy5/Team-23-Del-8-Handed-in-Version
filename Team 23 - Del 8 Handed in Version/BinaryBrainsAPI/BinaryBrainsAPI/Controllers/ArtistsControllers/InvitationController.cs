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
    [Route("api/Invitation")]
    [ApiController]
    public class InvitationController : ControllerBase
    {
        private readonly IAppRepository<Invitation> _appRepository;

        public InvitationController(IAppRepository<Invitation> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Invitation
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Invitation> invitations = _appRepository.GetAll();

            return Ok(invitations);
        }

        // GET: api/Invitation/{id}

        [HttpGet("{id}", Name = "GetInvitation")]
        public IActionResult Get(long id)
        {
            Invitation invitation = _appRepository.Get(id);


            if (invitation == null)
            {
                return NotFound("Requested Invitation does not exist.");
            }

            return Ok(invitation);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Invitation invitation)
        {
            if (invitation == null)
            {
                return BadRequest("Invitation is null.");
            }
            _appRepository.Add(invitation);
            return CreatedAtRoute(
                  "GetInvitation",
                  new { Id = invitation.InvitationID },
                  invitation);
        }

        // PUT: api/Invitation/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Invitation invitation)
        {
            if (invitation == null)
            {
                return BadRequest("Invitation is null.");
            }

            Invitation invitationToUpdate = _appRepository.Get(id);
            if (invitationToUpdate == null)
            {
                return NotFound("The Invitation does not exist.");
            }
            _appRepository.Update(invitationToUpdate, invitation);

            return NoContent();
        }


        // DELETE: api/Invitation/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Invitation invitation = _appRepository.Get(id);
            if (invitation == null)
            {
                return NotFound("The Invitation does not exist.");
            }
            _appRepository.Delete(invitation);

            return NoContent();
        }

    }
}
