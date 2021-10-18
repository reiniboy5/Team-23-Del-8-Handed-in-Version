import { User } from '../Users/user';
import { ApplicationStatus } from './application-status';
import { Exhibition } from './exhibition';

export class ExhibitionApplication {
  exhibitionApplicationID: number;
  exhibitionApplicationImage1: string;
  exhibitionApplicationImage2: string;
  exhibitionApplicationImage3: string;
  applicationDescription: string;

  exhibition: Exhibition;

  applicationStatus: ApplicationStatus;
  user: User;
}
