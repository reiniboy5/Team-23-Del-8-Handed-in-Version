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
    [Route("api/TeacherType")]
    [ApiController]
    public class TeacherTypeController : ControllerBase
    {
        private readonly IAppRepository<TeacherType> _appRepository;

        public TeacherTypeController(IAppRepository<TeacherType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/TeacherType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<TeacherType> teacherTypes = _appRepository.GetAll();

            return Ok(teacherTypes);
        }

        // GET: api/TeacherType/{id}

        [HttpGet("{id}", Name = "GetTeacherType")]
        public IActionResult Get(long id)
        {
            TeacherType teacherType = _appRepository.Get(id);


            if (teacherType == null)
            {
                return NotFound("Requested Teacher Type does not exist.");
            }

            return Ok(teacherType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] TeacherType teacherType)
        {
            if (teacherType == null)
            {
                return BadRequest("Teacher Type is null.");
            }
            _appRepository.Add(teacherType);
            return CreatedAtRoute(
                  "GetTeacherType",
                  new { Id = teacherType.TeacherTypeID },
                  teacherType);
        }

        // PUT: api/TeacherType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] TeacherType teacherType)
        {
            if (teacherType == null)
            {
                return BadRequest("Teacher Type is null.");
            }

            TeacherType teacherTypeToUpdate = _appRepository.Get(id);
            if (teacherTypeToUpdate == null)
            {
                return NotFound("The Teacher Type does not exist.");
            }
            _appRepository.Update(teacherTypeToUpdate, teacherType);

            return NoContent();
        }


        // DELETE: api/TeacherType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            TeacherType teacherType = _appRepository.Get(id);
            if (teacherType == null)
            {
                return NotFound("The Teacher Type does not exist.");
            }
            _appRepository.Delete(teacherType);

            return NoContent();
        }
    }
}
