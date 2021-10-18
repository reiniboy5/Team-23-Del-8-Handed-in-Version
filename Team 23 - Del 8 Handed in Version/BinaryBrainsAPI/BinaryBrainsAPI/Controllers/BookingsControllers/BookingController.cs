using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Entities.Bookings;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.BookingsControllers
{
    [Route("api/Booking")]
    [EnableCors("MyCorsPolicy")]
    public class BookingController : ControllerBase
    {
        private readonly IAppRepository<Booking> _appRepository;
        private readonly IAppRepository<ArtClass> _artclassRepository;

        public BookingController(IAppRepository<Booking> appRepository, IAppRepository<ArtClass> artclassRepository)
        {
            _appRepository = appRepository;
            _artclassRepository = artclassRepository;
        }

        // GET: api/Booking
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Booking> bookings = _appRepository.GetAll();

            foreach (Booking i in bookings)
            {
                ArtClass artClass = _artclassRepository.Get((long)i.ArtClassID);

                i.ArtClass = artClass;
         
            }

            return Ok(bookings);
        }

        // GET: api/Booking/{id}

        [HttpGet("{id}", Name = "GetBooking")]
        public IActionResult Get(long id)
        {
            Booking booking = _appRepository.Get(id);

            

            if (booking == null)
            {
                return NotFound("Requested Booking does not exist.");
            }

            return Ok(booking);
        }
        /*
        
        // GET: api/Booking/{id}

        [HttpGet("{id}", Name = "GetUserBookings")]
        public IActionResult Get(int id)

        {
            IEnumerable<Booking> bookings = _appRepository.GetByString(id.ToString() + "stringuserid");

            var listBookins = bookings.ToList();


            return Ok(bookings);
        }
        
        */
        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Booking booking)
        {


            if (booking == null)
            {
                return BadRequest("Booking is null.");
            }

            ArtClass artclass = _artclassRepository.Get(booking.ArtClassID);

            string artclassStringID = booking.ArtClassID.ToString()+ "stringartclassid";

            IEnumerable<Booking> existinGbookings = _appRepository.GetByString(artclassStringID);


            foreach (Booking exist in existinGbookings)
            {
                if (exist.UserID == booking.UserID)
                {
                    return BadRequest("User already booked for class");

                }

            }


            if (artclass.ClassLimit <= existinGbookings.Count())
            {
                return BadRequest("Class is fully booked.");

            }

            _appRepository.Add(booking);

            return CreatedAtRoute(
                  "GetBooking",
                  new { Id = booking.BookingID },
                  booking);
        }

        // PUT: api/Booking/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Booking booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking is null.");
            }

            Booking bookingToUpdate = _appRepository.Get(id);
            if (bookingToUpdate == null)
            {
                return NotFound("The Booking does not exist.");
            }
            _appRepository.Update(bookingToUpdate, booking);

            return NoContent();
        }


        // DELETE: api/Booking/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Booking booking = _appRepository.Get(id);
            if (booking == null)
            {
                return NotFound("The Booking does not exist.");
            }
            _appRepository.Delete(booking);

            return NoContent();
        }
    }
}
