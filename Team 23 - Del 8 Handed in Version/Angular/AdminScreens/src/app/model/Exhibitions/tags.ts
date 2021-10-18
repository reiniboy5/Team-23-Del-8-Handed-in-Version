import { Exhibition } from './exhibition';
import { ExhibitionApplication } from './exhibition-application';

export class Tags {
  applicationTagID: number;
  applicationArtworkTitle: string;
  applicationDimension: string;
  price: string;
  medium: string;
  exhibitionApplication: ExhibitionApplication;
  exhibition: Exhibition;
}
