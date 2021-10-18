using BinaryBrainsAPI.Entities.Bookings;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.BookingsControllers
{
    [Route("api/BookingNotification")]
    [ApiController]
    public class BookingNotificationController : ControllerBase
    {
        private readonly IAppRepository<BookingNotification> _appRepository;

        public BookingNotificationController(IAppRepository<BookingNotification> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/BookingNotification
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<BookingNotification> bookingNotifications = _appRepository.GetAll();

            return Ok(bookingNotifications);
        }

        // GET: api/BookingNotification/{id}

        [HttpGet("{id}", Name = "GetBookingNotification")]
        public IActionResult Get(long id)
        {
            BookingNotification bookingNotification = _appRepository.Get(id);


            if (bookingNotification == null)
            {
                return NotFound("Requested Booking Notification does not exist.");
            }

            return Ok(bookingNotification);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] BookingNotification bookingNotification)
        {
            if (bookingNotification == null)
            {
                return BadRequest("Booking Notification is null.");
            }
            _appRepository.Add(bookingNotification);
            return CreatedAtRoute(
                  "GetBookingNotification",
                  new { Id = bookingNotification.BookingNotificationID },
                  bookingNotification);
        }

        // PUT: api/BookingNotification/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] BookingNotification bookingNotification)
        {
            if (bookingNotification == null)
            {
                return BadRequest("Booking Notification is null.");
            }

            BookingNotification bookingNotificationToUpdate = _appRepository.Get(id);
            if (bookingNotificationToUpdate == null)
            {
                return NotFound("The Booking Notification does not exist.");
            }
            _appRepository.Update(bookingNotificationToUpdate, bookingNotification);

            return NoContent();
        }


        // DELETE: api/BookingNotification/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            BookingNotification bookingNotification = _appRepository.Get(id);
            if (bookingNotification == null)
            {
                return NotFound("The Booking Notification does not exist.");
            }
            _appRepository.Delete(bookingNotification);

            return NoContent();
        }
    }
}
