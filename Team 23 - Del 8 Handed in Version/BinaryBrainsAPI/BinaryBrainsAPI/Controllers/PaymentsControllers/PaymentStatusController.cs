using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.PaymentsControllers
{
    [Route("api/PaymentStatus")]
    [ApiController]
    public class PaymentStatusController : ControllerBase
    {
        private readonly IAppRepository<PaymentStatus> _appRepository;

        public PaymentStatusController(IAppRepository<PaymentStatus> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/PaymentStatus
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<PaymentStatus> paymentStatuses = _appRepository.GetAll();

            return Ok(paymentStatuses);
        }

        // GET: api/PaymentStatus/{id}

        [HttpGet("{id}", Name = "GetPaymentStatus")]
        public IActionResult Get(long id)
        {
            PaymentStatus paymentStatus = _appRepository.Get(id);


            if (paymentStatus == null)
            {
                return NotFound("Requested Payment Status does not exist.");
            }

            return Ok(paymentStatus);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] PaymentStatus paymentStatus)
        {
            if (paymentStatus == null)
            {
                return BadRequest("Payment Status is null.");
            }
            _appRepository.Add(paymentStatus);
            return CreatedAtRoute(
                  "GetPaymentStatus",
                  new { Id = paymentStatus.PaymentStatusID },
                  paymentStatus);
        }

        // PUT: api/PaymentStatus/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] PaymentStatus paymentStatus)
        {
            if (paymentStatus == null)
            {
                return BadRequest("Payment Status is null.");
            }

            PaymentStatus paymentStatusToUpdate = _appRepository.Get(id);
            if (paymentStatusToUpdate == null)
            {
                return NotFound("The Payment Status does not exist.");
            }
            _appRepository.Update(paymentStatusToUpdate, paymentStatus);

            return NoContent();
        }


        // DELETE: api/PaymentStatus/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            PaymentStatus paymentStatus = _appRepository.Get(id);
            if (paymentStatus == null)
            {
                return NotFound("The Payment Status does not exist.");
            }
            _appRepository.Delete(paymentStatus);

            return NoContent();
        }
    }
}
