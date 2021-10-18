import { ExhibitionType } from "./exhibition-type";
import { Organisation } from "./organisation";
import { Schedule } from "./schedule";
import { Venue } from "./venue";

export class Exhibition {
    exhibitionID: number;
    exhibitionName: string;
    exhibitionDescription: string;
    exhibitionStartDateTime: string;
    exhibitionEndDateTime: string;
    exhibitionImage: string;

    exhibitionType: ExhibitionType;

    // schedule: Schedule;

    organisation: Organisation;

    venue: Venue;
}
