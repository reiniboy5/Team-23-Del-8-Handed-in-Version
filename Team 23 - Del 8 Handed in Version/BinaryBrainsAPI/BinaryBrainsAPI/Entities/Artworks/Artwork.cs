using BinaryBrainsAPI.Entities.Images;
using BinaryBrainsAPI.Entities.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.Artworks
{
    public class Artwork
    {
        [Key]
        public int ArtworkID { get; set; }
        public string ArtworkTitle { get; set; }
        public double ArtworkPrice { get; set; }
        public string ArtworkImage { get; set; }

        [ForeignKey("SurfaceTypeID")]
        public int SurfaceTypeID { get; set; }
        public SurfaceType SurfaceType { get; set; }

        [ForeignKey("MediumTypeID")]
        public int MediumTypeID { get; set; }
        public MediumType MediumType { get; set; }

        [ForeignKey("ArtworkStatusID")]
        public int? ArtworkStatusID { get; set; }
        public ArtworkStatus ArtworkStatus { get; set; }

        [ForeignKey("ArtworkDimensionID")]
        public int ArtworkDimensionID { get; set; }
        public ArtworkDimension ArtworkDimension { get; set; }

        [ForeignKey("FrameColourID")]
        public int FrameColourID { get; set; }
        public FrameColour FrameColour { get; set; }

        [ForeignKey("UserID")]
        public int? UserID { get; set; }
        public User User { get; set; }

        [ForeignKey("ArtworkTypeID")]
        public int ArtworkTypeID { get; set; }
        public ArtworkType ArtworkType { get; set; }

    }
}
