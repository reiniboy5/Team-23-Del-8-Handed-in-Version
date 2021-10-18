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
    [Route("api/PaymentType")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        private readonly IAppRepository<PaymentType> _appRepository;

        public PaymentTypeController(IAppRepository<PaymentType> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/PaymentType
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<PaymentType> paymentTypes = _appRepository.GetAll();

            return Ok(paymentTypes);
        }

        // GET: api/PaymentType/{id}

        [HttpGet("{id}", Name = "GetPaymentType")]
        public IActionResult Get(long id)
        {
            PaymentType paymentType = _appRepository.Get(id);


            if (paymentType == null)
            {
                return NotFound("Requested Payment Type does not exist.");
            }

            return Ok(paymentType);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] PaymentType paymentType)
        {
            if (paymentType == null)
            {
                return BadRequest("Payment Type is null.");
            }
            _appRepository.Add(paymentType);
            return CreatedAtRoute(
                  "GetPaymentType",
                  new { Id = paymentType.PaymentTypeID },
                  paymentType);
        }

        // PUT: api/PaymentType/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] PaymentType paymentType)
        {
            if (paymentType == null)
            {
                return BadRequest("Payment Type is null.");
            }

            PaymentType paymentTypeToUpdate = _appRepository.Get(id);
            if (paymentTypeToUpdate == null)
            {
                return NotFound("The Payment Type does not exist.");
            }
            _appRepository.Update(paymentTypeToUpdate, paymentType);

            return NoContent();
        }


        // DELETE: api/PaymentType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            PaymentType paymentType = _appRepository.Get(id);
            if (paymentType == null)
            {
                return NotFound("The Payment Type does not exist.");
            }
            _appRepository.Delete(paymentType);

            return NoContent();
        }
    }
}
