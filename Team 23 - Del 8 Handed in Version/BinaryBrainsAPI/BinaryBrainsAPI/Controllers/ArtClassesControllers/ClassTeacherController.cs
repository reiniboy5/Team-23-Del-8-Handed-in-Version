using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtClassesControllers
{
    [Route("api/ClassTeacher")]
    [EnableCors("MyCorsPolicy")]
    public class ClassTeacherController : ControllerBase
    {
        private readonly IAppRepository<ClassTeacher> _appRepository;
        private readonly IAppRepository<ArtClass> _artClassRepository;

        //private IClassTeacherRepository teacherRepo;

        public ClassTeacherController(IAppRepository<ClassTeacher> appRepository, IAppRepository<ArtClass> artClassRepository)
        {
            _appRepository = appRepository;
            _artClassRepository = artClassRepository;
            //teacherRepo = _teacherRepo;
        }

        // GET: api/ClassTeacher
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ClassTeacher> classTeachers = _appRepository.GetAll();

            return Ok(classTeachers);
        }

        // GET: api/ClassTeacher/{id}

        [HttpGet("{id}", Name = "GetClassTeacher")]
        public IActionResult Get(long id)
        {
            ClassTeacher classTeacher = _appRepository.Get(id);


            if (classTeacher == null)
            {
                return NotFound("Requested Class Teacher does not exist.");
            }

            return Ok(classTeacher);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ClassTeacher classTeacher)
        {
            if (classTeacher == null)
            {
                return BadRequest("Class Teacher is null.");
            }
            _appRepository.Add(classTeacher);
            return CreatedAtRoute(
                  "GetClassTeacher",
                  new { Id = classTeacher.ClassTeacherID },
                  classTeacher);
        }

        // PUT: api/ClassTeacher/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ClassTeacher classTeacher)
        {
            if (classTeacher == null)
            {
                return BadRequest("Class Teacher is null.");
            }
            ClassTeacher classTeacherToUpdate = _appRepository.Get(id);
            if (classTeacherToUpdate == null)
            {
                return NotFound("The Class Teacher record couldn't be found.");
            }
            _appRepository.Update(classTeacherToUpdate, classTeacher);

            return NoContent();
        }

        // UPDATE: api/updateteacher
        //[HttpPatch]
        //[Route("updateteacher")]
        //public IActionResult UpdateTeacher([FromBody] ClassTeacher classTeacher)
        //{
        //    teacherRepo.UpdateClassTeacher(classTeacher);
        //    return NoContent();
        //}


        // DELETE: api/ClassTeacher/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            IEnumerable<ArtClass> artClass = _artClassRepository.GetByString(id.ToString());

            if (artClass.Count() > 0)
            {
                return BadRequest();
            }
            else
            {
                ClassTeacher classTeacher = _appRepository.Get(id);
                _appRepository.Delete(classTeacher);
            }


            return NoContent();
        }
    }
}
