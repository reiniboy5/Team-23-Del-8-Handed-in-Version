import { ArtworkDimension } from "./artwork-dimension";
import { ArtworkStatus } from "./artwork-status";
import { ArtworkType } from "./artwork-type";
import { FrameColour } from "./frame-colour";
import { MediumType } from "./medium-type";
import { SurfaceType } from "./surface-type";

export class Artwork {
    artworkID: number;
    artworkTitle: string;
    artworkPrice: number;
    artworkImage: string;

    surfaceType: SurfaceType;

    mediumType: MediumType;

    artworkStatus: ArtworkStatus;

    frameColour: FrameColour;

    artworkDimension: ArtworkDimension;

    artworkType: ArtworkType;
}
