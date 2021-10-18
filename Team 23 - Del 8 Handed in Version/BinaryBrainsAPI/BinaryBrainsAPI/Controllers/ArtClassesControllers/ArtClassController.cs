using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Entities.Exhibitions;
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
    [Route("api/ArtClass")]
    [EnableCors("MyCorsPolicy")]
    public class ArtClassController : ControllerBase
    {
        private readonly IAppRepository<ArtClass> _appRepository;
        private readonly IAppRepository<ArtClassType> _artClassTypeRepository;
        private readonly IAppRepository<Venue> _venueRepository;
        private readonly IAppRepository<ClassTeacher> _classTeacherRepository;
        private readonly IAppRepository<Organisation> _organisationRepository;
       
        public ArtClassController(IAppRepository<ArtClass> appRepository, 
       IAppRepository<ArtClassType> artClassTypeRepository,
        IAppRepository<Venue> venueRepository,
        IAppRepository<ClassTeacher> classTeacherRepository,
       IAppRepository<Organisation> organisationRepository)
        {
            _appRepository = appRepository;
            _artClassTypeRepository = artClassTypeRepository;
            _venueRepository = venueRepository;
            _classTeacherRepository = classTeacherRepository;
            _organisationRepository = organisationRepository;
        }

        // GET: api/ArtClass
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ArtClass> artClasses = _appRepository.GetAll();


            foreach (ArtClass i in artClasses)
            {
                Venue venue = _venueRepository.Get((long)i.VenueID);
               Organisation organisation = _organisationRepository.Get((long)i.OrganisationID);
               ArtClassType artClassType = _artClassTypeRepository.Get((long)i.ArtClassTypeID);
                ClassTeacher classTeacher = _classTeacherRepository.Get((long)i.ClassTeacherID);
              
                i.Venue = venue;
                i.Organisation = organisation;
                i.ArtClassType = artClassType;
                i.ClassTeacher = classTeacher;

            }

            return Ok(artClasses);
        }

        // GET: api/User/{id}

        [HttpGet("{id}", Name = "GetArtClass")]
        public IActionResult Get(long id)
        {
            ArtClass artClass = _appRepository.Get(id);

            ClassTeacher classTeacher = _classTeacherRepository.Get((long)artClass.ClassTeacherID);

            artClass.ClassTeacher = classTeacher;


            if (artClass == null)
            {
                return NotFound("Requested Art Class does not exist.");
            }

            return Ok(artClass);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] ArtClass artClass)
        {
            if (artClass == null)
            {
                return BadRequest("Art Class is null.");
            }
            _appRepository.Add(artClass);
            return CreatedAtRoute(
                  "GetArtClass",
                  new { Id = artClass.ArtClassID },
                  artClass);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] ArtClass artClass)
        {
            if (artClass == null)
            {
                return BadRequest("Art Class is null.");
            }
            ArtClass artClassToUpdate = _appRepository.Get(id);
            if (artClassToUpdate == null)
            {
                return NotFound("The Art Class record couldn't be found.");
            }
            _appRepository.Update(artClassToUpdate, artClass);

            return NoContent();
        }


        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ArtClass artClass = _appRepository.Get(id);
            if (artClass == null)
            {
                return NotFound("The Art Class does not exist.");
            }
            _appRepository.Delete(artClass);

            return NoContent();
        }
    }
}
