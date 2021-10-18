using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using BinaryBrainsAPI.Providers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace BinaryBrainsAPI.Controllers
{
    [Route("api/Login")]
    [EnableCors("MyCorsPolicy")]

    public class LoginController : ControllerBase
    {

        private readonly IIdentifier<User> _appRepository;
        private readonly IAppRepository<User> _applicationRepository;

        bool isAuthenticated;
        public LoginController(IIdentifier<User> appRepository, IAppRepository<User> applicationRepository)
        {
            _appRepository = appRepository;

            _applicationRepository = applicationRepository;
        }


    


    [HttpGet("{username}/{password}", Name = "GetUserDetails")]
        public IActionResult Get(string username, string password)
        {
            
            
            
            User user = _appRepository.getUser(username);

            string encryptionKey = "sblw-3hn8-sqoy19";

            password = CryptoEngine.Encrypt(password, encryptionKey);


            if (user == null)
            {
                return NotFound("Requested User does not exist.");
            }

            if (user.IsVerified == false)
            {
                return BadRequest("You have not verified your account. Please use link that was sent on registration");
            }

            if (user != null && user.UserPassword == password)
            {
                isAuthenticated = true;

                return Ok(user);

            }

            if (user.IsVerified == false)
            {
                return BadRequest("You have not verified your account. Please use link that was sent on registration");
            }


            if (user != null && user.UserPassword != password)
            {
                return NotFound("Password not matched with username.");
            }

            return Ok(user);
        }


        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] UserInfo userInfo)
        {
           

            if (userInfo.UserEmail == null)
            {
                return BadRequest("Email is null");

            }

            if (_applicationRepository.GetByString(userInfo.UserEmail + "stringemail").Count() == 0)
            {
                return BadRequest("Please register as a user.");
            }
            try
            {
                string sourcemethod = "reset";

                SendEmail.SendEmailMethod(userInfo.UserEmail, sourcemethod,null);

                return Ok(userInfo);

            }

            catch(Exception ex)
            {

                return BadRequest("An error occured:" + ex.Message);
            }


            
        }



        // PUT: api/Login/5
        [HttpPut("{id}")]
        public IActionResult Put(long id)
        {

            User user = _applicationRepository.Get(id);

            if (user == null)
            {

                return BadRequest("Account not found");

            }

            if (user.IsVerified == true)
            {

                return BadRequest("Account is already verified, please login");

            }

            User userToUpdate = user;

            user.IsVerified = true;

            try
            {

                _applicationRepository.Update(user, userToUpdate);

                return Ok(user);
            }
            catch(Exception ex)
            {

                return BadRequest("An error occured:" + ex.Message);


            }

                      
       }
    }
}
