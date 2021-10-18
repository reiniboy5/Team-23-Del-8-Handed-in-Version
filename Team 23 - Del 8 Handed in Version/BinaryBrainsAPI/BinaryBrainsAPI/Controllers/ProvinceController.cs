using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/Province")]
    [EnableCors("MyCorsPolicy")]
    public class ProvinceController : Controller
    {
        private readonly IAppRepository<Province> _appRepository;

        public ProvinceController(IAppRepository<Province> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Province
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Province> provinces = _appRepository.GetAll();

            return Ok(provinces);
        }

        // GET: api/Province/{id}

        [HttpGet("{id}", Name = "GetProvince")]
        public IActionResult Get(long id)
        {
            Province province = _appRepository.Get(id);


            if (province == null)
            {
                return NotFound("Requested Province does not exist.");
            }

            return Ok(province);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] Province province)
        {
            if (province == null)
            {
                return BadRequest("Province is null.");
            }
            _appRepository.Add(province);
            return CreatedAtRoute(
                  "GetProvince",
                  new { Id = province.ProvinceID },
                  province);
        }

        // PUT: api/Province/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Province province)
        {
            if (province == null)
            {
                return BadRequest("Province is null.");
            }

            Province provinceToUpdate = _appRepository.Get(id);
            if (provinceToUpdate == null)
            {
                return NotFound("The Province does not exist.");
            }
            _appRepository.Update(provinceToUpdate, province);

            return NoContent();
        }


        // DELETE: api/Province/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Province province = _appRepository.Get(id);
            if (province == null)
            {
                return NotFound("The province does not exist.");
            }
            _appRepository.Delete(province);

            return NoContent();
        }
    }
}
