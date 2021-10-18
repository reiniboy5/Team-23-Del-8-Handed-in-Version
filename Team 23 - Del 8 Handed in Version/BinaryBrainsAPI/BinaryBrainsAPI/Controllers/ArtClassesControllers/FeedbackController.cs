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
    [Route("api/Feedback")]
    [EnableCors("MyCorsPolicy")]
    public class FeedbackController : ControllerBase
    {
        private readonly IAppRepository<Feedback> _appRepository;

        public FeedbackController(IAppRepository<Feedback> appRepository)
        {
            _appRepository = appRepository;
        }

        // GET: api/Feedback
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Feedback> feedbacks = _appRepository.GetAll();

            return Ok(feedbacks);
        }

        // GET: api/Feedback/{id}

        [HttpGet("{id}", Name = "GetFeedback")]
        public IActionResult Get(long id)
        {
            Feedback feedback = _appRepository.Get(id);


            if (feedback == null)
            {
                return NotFound("Requested Feedback does not exist.");
            }

            return Ok(feedback);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] dynamic feedback)
        {



          

            string feedbackDynamic = feedback.ToString();

            dynamic theDynamicFeedbackObj = Newtonsoft.Json.JsonConvert.DeserializeObject(feedbackDynamic);

            Feedback newFeedback = new Feedback();

            newFeedback.ArtClassID = theDynamicFeedbackObj.ArtClassID;
            newFeedback.UserID = theDynamicFeedbackObj.UserID;
            newFeedback.FeedbackComment = theDynamicFeedbackObj.FeedbackComment;
            newFeedback.TeacherRating = theDynamicFeedbackObj.TeacherRating;
            newFeedback.DifficultyRating = theDynamicFeedbackObj.DifficultyRating;
            newFeedback.OverallRating = theDynamicFeedbackObj.OverallRating;


            if (newFeedback == null)
            {
                return BadRequest("Feedback is null.");
            }

            _appRepository.Add(newFeedback);
            return CreatedAtRoute(
                  "GetFeedback",
                  new { Id = newFeedback.FeedbackID },
                  newFeedback);
        }

        // PUT: api/Feedback/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Feedback feedback)
        {
            if (feedback == null)
            {
                return BadRequest("Feedback is null.");
            }
            Feedback feedbackToUpdate = _appRepository.Get(id);
            if (feedbackToUpdate == null)
            {
                return NotFound("The Feedback record couldn't be found.");
            }
            _appRepository.Update(feedbackToUpdate, feedback);

            return NoContent();
        }


        // DELETE: api/Feedback/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Feedback feedback = _appRepository.Get(id);
            if (feedback == null)
            {
                return NotFound("The Feedback does not exist.");
            }
            _appRepository.Delete(feedback);

            return NoContent();
        }
    }
}
