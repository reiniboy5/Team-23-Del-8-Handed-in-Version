using BinaryBrainsAPI.Entities.Artworks;
using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Entities.Users;
using BinaryBrainsAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Controllers.ArtworksControllers
{
    [Route("api/Artwork")]
    [EnableCors("MyCorsPolicy")]
    public class ArtworkController : ControllerBase
    {
        private readonly IAppRepository<Artwork> _appRepository;
        private readonly IAppRepository<User> _userRepository;
        private readonly IAppRepository<MediumType> _mediumTypeRepository;
        private readonly IAppRepository<SurfaceType> _surfaceTypeRepository;
        private readonly IAppRepository<ArtworkStatus> _artworkStatusRepository;
        private readonly IAppRepository<ArtworkDimension> _artworkDimesionRepository;
        private readonly IAppRepository<ArtworkType> _artworkTypeRepository;
        private readonly IAppRepository<FrameColour> _frameColourRepository;
        private readonly IAppRepository<Image> _imageRepository;

        public ArtworkController(IAppRepository<Artwork> appRepository, IAppRepository<User> userRepository,
            IAppRepository<MediumType> mediumTypeRepository, IAppRepository<SurfaceType> surfaceTypeRepository
            , IAppRepository<ArtworkStatus> artworkStatusRepository, IAppRepository<FrameColour> frameColourRepository
            , IAppRepository<ArtworkDimension> artworkDimesionRepository, IAppRepository<ArtworkType> artworkTypeRepository)
            //, IAppRepository<Image> imageRepository)
        {
            _appRepository = appRepository;
            _userRepository = userRepository;
            _mediumTypeRepository = mediumTypeRepository;
            _surfaceTypeRepository = surfaceTypeRepository;
            _artworkStatusRepository = artworkStatusRepository;
            _frameColourRepository = frameColourRepository;
            _artworkDimesionRepository = artworkDimesionRepository;
            _artworkTypeRepository = artworkTypeRepository;
            //_imageRepository = imageRepository;
            _frameColourRepository = frameColourRepository;
        }

        // GET: api/Artwork
        [HttpGet]
        public IActionResult Get()
        {


             IEnumerable<Artwork> artworks = _appRepository.GetAll();

            //foreach (Artwork i in artworks)
            //{
            // User user = _userRepository.Get((long)i.UserID);
            // SurfaceType surfaceType = _surfaceTypeRepository.Get((long)i.SurfaceTypeID);
            //MediumType mediumType = _mediumTypeRepository.Get((long)i.MediumTypeID);
            //ArtworkStatus artworkStatus = _artworkStatusRepository.Get((long)i.ArtworkStatusID);
            //ArtworkDimension artworkDimension = _artworkDimesionRepository.Get((long)i.ArtworkDimensionID);
            //ArtworkType artworkType = _artworkTypeRepository.Get((long)i.ArtworkTypeID);
            //   //Image image = _imageRepository.Get((long)i.ImageID);

            // i.User = user;
            // i.SurfaceType = surfaceType;
            // i.MediumType = mediumType;
            //i.ArtworkStatus = artworkStatus;
            // i.ArtworkDimension = artworkDimension;
            // i.ArtworkType = artworkType;
            //i.Image = image;


            //}
            

            return Ok(artworks);
        }

        // GET: api/Artwork/{id}

        [HttpGet("{id}", Name = "GetArtwork")]
        public IActionResult Get(long id)
        {
            Artwork artwork = _appRepository.Get(id);


            if (artwork == null)
            {
                return NotFound("Requested Artwork does not exist.");
            }

            return Ok(artwork);
        }

        // GET: api/Create
        [HttpPost]
        public IActionResult Post([FromBody] dynamic artwork)
        {

            string artworkStringToResialise = artwork.ToString();

            dynamic serialArtwork = Newtonsoft.Json.JsonConvert.DeserializeObject(artworkStringToResialise);


            Artwork artwork1 = new Artwork();

            artwork1.ArtworkTitle = serialArtwork.ArtworkTitle;
            artwork1.ArtworkDimensionID = serialArtwork.ArtworkDimensionID;
            artwork1.ArtworkTypeID = serialArtwork.ArtworkTypeID;
            artwork1.ArtworkPrice = serialArtwork.ArtworkPrice;
            artwork1.ArtworkStatusID = serialArtwork.ArtworkStatusID;
            artwork1.ArtworkImage = serialArtwork.ArtworkPicture1BASE64;
            artwork1.FrameColourID = serialArtwork.FrameColourID;
            artwork1.MediumTypeID = serialArtwork.MediumTypeID;
            artwork1.SurfaceTypeID = serialArtwork.SurfaceTypeID;
            artwork1.UserID = serialArtwork.UserID;



            if (artwork1 == null)
            {
                return BadRequest("Artwork is null.");
            }
            _appRepository.Add(artwork1);
            return CreatedAtRoute(
                  "GetArtwork",
                  new { Id = artwork1.ArtworkID },
                  artwork1);
        }

        // PUT: api/Artwork/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Artwork artwork)
        {
            if (artwork == null)
            {
                return BadRequest("Artwork is null.");
            }

            Artwork artworkToUpdate = _appRepository.Get(id);
            if (artworkToUpdate == null)
            {
                return NotFound("The Artwork does not exist.");
            }
            _appRepository.Update(artworkToUpdate, artwork);

            return NoContent();
        }


        // DELETE: api/Artwork/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Artwork artwork = _appRepository.Get(id);
            if (artwork == null)
            {
                return NotFound("The Artwork does not exist.");
            }
            _appRepository.Delete(artwork);

            return NoContent();
        }
    }
}
