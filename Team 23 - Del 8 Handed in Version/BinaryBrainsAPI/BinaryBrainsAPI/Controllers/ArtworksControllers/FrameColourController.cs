using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtworksControllers
{
    [Route("api/FrameColour")]
    [ApiController]
    public class FrameColourController : ControllerBase
    {
        private readonly IAppRepository<FrameColour> _appRepository;

        public FrameColourController(IAppRepository<FrameColour> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/FrameColour
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<FrameColour> frameColours = _appRepository.GetAll();

            return Ok(frameColours);
        }

        // GET: api/FrameColour/{id}

        [HttpGet("{id}", Name = "GetFrameColour")]
        public IActionResult Get(long id)
        {
            FrameColour frameColour = _appRepository.Get(id);


            if (frameColour == null)
            {
                return NotFound("Requested Frame Colour does not exist.");
            }

            return Ok(frameColour);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] FrameColour frameColour)
        {
            if (frameColour == null)
            {
                return BadRequest("Frame Colour is null.");
            }
            _appRepository.Add(frameColour);
            return CreatedAtRoute(
                  "GetFrameColour",
                  new { Id = frameColour.FrameColourID },
                  frameColour);
        }

        // PUT: api/FrameColour/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] FrameColour frameColour)
        {
            if (frameColour == null)
            {
                return BadRequest("Frame Colour is null.");
            }

            FrameColour frameColourToUpdate = _appRepository.Get(id);
            if (frameColourToUpdate == null)
            {
                return NotFound("The Frame Colour does not exist.");
            }
            _appRepository.Update(frameColourToUpdate, frameColour);

            return NoContent();
        }


        // DELETE: api/FrameColour/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            FrameColour frameColour = _appRepository.Get(id);
            if (frameColour == null)
            {
                return NotFound("The Frame Colour does not exist.");
            }
            _appRepository.Delete(frameColour);

            return NoContent();
        }
    }
}
