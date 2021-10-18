using BinaryBrainsAPI.Entities.Artworks;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Entities.BridgeEntities
{
    public class ExhibitionArtwork
    {
        [Key]
        public int ExhibitionArtworkID { get; set; }

        [ForeignKey("ExhibitionID")]
        public int? ExhibitionID { get; set; }
        public Exhibition Exhibition { get; set; }

        [ForeignKey("ArtworkID")]
        public int? ArtworkID { get; set; }
        public Artwork Artwork { get; set; }
    }
}
