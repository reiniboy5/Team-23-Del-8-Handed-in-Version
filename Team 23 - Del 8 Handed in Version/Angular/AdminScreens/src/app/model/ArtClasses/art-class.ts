import { Organisation } from "../Exhibitions/organisation";
import { Venue } from "../Exhibitions/venue";
import { ArtClassType } from "./art-class-type";
import { ClassTeacher } from "./class-teacher";

export class ArtClass {
    artClassID: number;
    artClassName: string;
    artClassDescription: string;
    artClassStartDateTime: string;
    artClassEndDateTime: string;
    artClassImage: string;
    classLimit: number;
    refundDayLimit: number;
    classPrice: number;

    artClassType: ArtClassType;

    venue: Venue;

    classTeacher: ClassTeacher;

    organisation: Organisation;
}
