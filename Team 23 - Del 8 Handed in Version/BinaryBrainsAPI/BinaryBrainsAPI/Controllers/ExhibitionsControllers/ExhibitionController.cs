using BinaryBrainsAPI.Entities;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ExhibitionsControllers
{
    [Route("api/Exhibition")]
    [ApiController]
    public class ExhibitionController : ControllerBase
    {
        private readonly IAppRepository<Exhibition> _appRepository;
        //private readonly IAppRepository<ExhibitionType> _exhibitionTypeRepository;
        //private readonly IAppRepository<Schedule> _scheduleRepository;
        //private readonly IAppRepository<Organisation> _organisationRepository;
        //private readonly IAppRepository<Venue> _venueRepository;
        //private readonly IAppRepository<Image> _imageRepository;

        public ExhibitionController(IAppRepository<Exhibition> appRepository)
        //  IAppRepository<ExhibitionType> exhibitionTypeRepository
        // //,IAppRepository<Schedule> scheduleRepository
        //,IAppRepository<Organisation> organisationRepository
        //, IAppRepository<Venue> venueRepository)
        //,IAppRepository<Image> imageRepository)
        {
            _appRepository = appRepository;
            //_exhibitionTypeRepository = exhibitionTypeRepository;
            ////_scheduleRepository = scheduleRepository;
            //_organisationRepository = organisationRepository;
            //_venueRepository = venueRepository;
            //_imageRepository = imageRepository;
        }

        // GET: api/Exhibition
        [HttpGet]
        public IActionResult Get()
        {
            //IEnumerable<Exhibition> exhibitions = _appRepository.GetAll();

            //foreach (Exhibition i in exhibitions)
            //{
            //    Venue venue = _venueRepository.Get((long)i.VenueID);
            //    Organisation organisation = _organisationRepository.Get((long)i.OrganisationID);
            //    //Schedule schedule = _scheduleRepository.Get((long)i.ScheduleID);
            //    ExhibitionType exhibitionType = _exhibitionTypeRepository.Get((long)i.ExhibitionTypeID);
            //    //Image image = _imageRepository.Get((long)i.ImageID);

            //    i.Venue = venue;
            //    i.Organisation = organisation;
            //    //i.Schedule = schedule;
            //    i.ExhibitionType = exhibitionType;
            //    //i.Image = image;

            //}

            IEnumerable<Exhibition> exhibitions = _appRepository.GetAll();



            return Ok(exhibitions);
        }

        // GET: api/Exhibition/{id}

        [HttpGet("{id}", Name = "GetExhibition")]
        public IActionResult Get(long id)
        {
            Exhibition exhibition = _appRepository.Get(id);


            if (exhibition == null)
            {
                return NotFound("Requested Exhibition does not exist.");
            }

            return Ok(exhibition);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Exhibition exhibition)
        {
            if (exhibition == null)
            {
                return BadRequest("Exhibition is null.");
            }
            _appRepository.Add(exhibition);
            return CreatedAtRoute(
                  "GetExhibition",
                  new { Id = exhibition.ExhibitionID },
                  exhibition);
        }

        // PUT: api/Exhibition/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Exhibition exhibition)
        {
            if (exhibition == null)
            {
                return BadRequest("Exhibition is null.");
            }

            Exhibition exhibitionToUpdate = _appRepository.Get(id);
            if (exhibitionToUpdate == null)
            {
                return NotFound("The Exhibition does not exist.");
            }
            _appRepository.Update(exhibitionToUpdate, exhibition);

            return NoContent();
        }


        // DELETE: api/Exhibition/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Exhibition exhibition = _appRepository.Get(id);
            if (exhibition == null)
            {
                return NotFound("The Exhibition does not exist.");
            }
            _appRepository.Delete(exhibition);

            return NoContent();
        }
    }
}
