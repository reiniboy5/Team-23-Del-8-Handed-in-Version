using BinaryBrainsAPI.Controllers.BookingsControllers;
using BinaryBrainsAPI.Entities.Bookings;
using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Interfaces;
using BinaryBrainsAPI.Providers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.PaymentsControllers
{
    [Route("api/Payment")]
    [EnableCors("MyCorsPolicy")]
    public class PaymentController : ControllerBase
    {
        private readonly IAppRepository<Payment> _appRepository;
        private readonly IAppRepository<Booking> _bookingRepository;

        public PaymentController(IAppRepository<Payment> appRepository, IAppRepository<Booking> bookingRepository)
        {
            _appRepository = appRepository;
            _bookingRepository = bookingRepository;
        }

        // GET: api/Payment
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Payment> payments = _appRepository.GetAll();

            return Ok(payments);
        }

        // GET: api/Payment/{id}

        [HttpGet("{id}", Name = "GetPayment")]
        public IActionResult Get(long id)
        {
            Payment payment = _appRepository.Get(id);

            	
            if (payment == null)
            {
                return NotFound("Requested Payment does not exist.");
            }

            return Ok(payment);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] dynamic payment)
        {

            string paymentqq = payment.ToString();

            dynamic seripya = Newtonsoft.Json.JsonConvert.DeserializeObject(paymentqq);


            Payment pay = new Payment();

            pay.PaymentID = 0;
            pay.Amount = seripya.Amount;
            pay.BookingID = seripya.BookingID;
            pay.CardHolderName = seripya.CardHolderName;
            pay.CardNumber = seripya.CardNumber;
            pay.ExpiryDate = seripya.ExpiryDate;
            pay.Code = seripya.Code;
            pay.PaymentDateTime = seripya.PaymentDateTime;
            pay.PaymentStatus = seripya.PaymentStatus;
            pay.PaymentType = seripya.PaymentType;
            pay.RefundID = seripya.RefundID;

           

            if (pay == null)
            {
                return BadRequest("Payment is null.");
            }

            var response = ChargeCreditCard.Run("52AhCp7Wt8", "5P9n7Uu33d867E8f", (decimal)pay.Amount, pay.CardNumber, pay.Code, pay.ExpiryDate);


            if(response.messages.message[0].text == "Successful."){

                

                pay.PaymentStatus = "Successful";
                pay.CardNumber = "xxxx xxxx xxxx xxx";

                Booking bookingtoupdate = _bookingRepository.Get(pay.BookingID);

                Booking updatedbooking = bookingtoupdate;

                updatedbooking.BookingStatus = "Paid";

                _bookingRepository.Update(bookingtoupdate, updatedbooking);

                _appRepository.Add(pay);

                return CreatedAtRoute(
                      "GetPayment",
                      new { Id = pay.PaymentID },
                      pay);

            }

            return BadRequest("Payment Transaction Failed.");



        }

        // PUT: api/Payment/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Payment payment)
        {
            if (payment == null)
            {
                return BadRequest("Payment is null.");
            }

            Payment paymentToUpdate = _appRepository.Get(id);
            if (paymentToUpdate == null)
            {
                return NotFound("The Payment does not exist.");
            }
            _appRepository.Update(paymentToUpdate, payment);

            return NoContent();
        }


        // DELETE: api/Payment/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Payment payment = _appRepository.Get(id);
            if (payment == null)
            {
                return NotFound("The Payment does not exist.");
            }
            _appRepository.Delete(payment);

            return NoContent();
        }
    }
}
