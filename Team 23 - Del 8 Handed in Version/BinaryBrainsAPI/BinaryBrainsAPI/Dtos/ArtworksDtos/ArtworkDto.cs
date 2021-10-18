using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Dtos.ArtworksDtos
{
    public class ArtworkDto
    {
        public int ArtworkID { get; set; }
        public string ArtworkTitle { get; set; }
        public double ArtworkPrice { get; set; }
        public string ArtworkPicture { get; set; }
        public int SurfaceTypeID { get; set; }
        public SurfaceTypeDto SurfaceType { get; set; }
        public int MediumTypeID { get; set; }
        public MediumTypeDto MediumType { get; set; }
        public int ArtworkStatusID { get; set; }
        public ArtworkStatusDto ArtworkStatus { get; set; }
        public int FrameColourID { get; set; }
        public FrameColourDto FrameColour { get; set; }
        public int ArtworkDimensionID { get; set; }
        public ArtworkDimensionDto ArtworkDimension { get; set; }
    }
}

