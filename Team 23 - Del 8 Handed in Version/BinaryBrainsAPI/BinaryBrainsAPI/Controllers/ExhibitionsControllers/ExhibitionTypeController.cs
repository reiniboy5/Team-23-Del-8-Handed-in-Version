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
    [Route("api/ExhibitionType")]
    [ApiController]
    public class ExhibitionTypeController : ControllerBase
    {
        private readonly IAppRepository<ExhibitionType> _appRepository;

        public ExhibitionTypeController(IAppRepository<ExhibitionType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/ExhibitionType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ExhibitionType> exhibitionTypes = _appRepository.GetAll();

            return Ok(exhibitionTypes);
        }

        // GET: api/ExhibitionType/{id}

        [HttpGet("{id}", Name = "GetExhibitionType")]
        public IActionResult Get(long id)
        {
            ExhibitionType exhibitionType = _appRepository.Get(id);


            if (exhibitionType == null)
            {
                return NotFound("Requested Exhibition Type does not exist.");
            }

            return Ok(exhibitionType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ExhibitionType exhibitionType)
        {
            if (exhibitionType == null)
            {
                return BadRequest("Exhibition Type is null.");
            }
            _appRepository.Add(exhibitionType);
            return CreatedAtRoute(
                  "GetExhibitionType",
                  new { Id = exhibitionType.ExhibitionTypeID },
                  exhibitionType);
        }

        // PUT: api/ExhibitionType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ExhibitionType exhibitionType)
        {
            if (exhibitionType == null)
            {
                return BadRequest("Exhibition Type is null.");
            }

            ExhibitionType exhibitionTypeToUpdate = _appRepository.Get(id);
            if (exhibitionTypeToUpdate == null)
            {
                return NotFound("The Exhibition Type does not exist.");
            }
            _appRepository.Update(exhibitionTypeToUpdate, exhibitionType);

            return NoContent();
        }


        // DELETE: api/ExhibitionType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ExhibitionType exhibitionType = _appRepository.Get(id);
            if (exhibitionType == null)
            {
                return NotFound("The Exhibition Type does not exist.");
            }
            _appRepository.Delete(exhibitionType);

            return NoContent();
        }
    }
}
