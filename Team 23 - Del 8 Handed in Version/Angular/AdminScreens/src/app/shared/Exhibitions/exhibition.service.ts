import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';
import { ExhibitionAnnouncement } from 'src/app/model/Exhibitions/exhibition-announcement';
import { ExhibitionApplication } from 'src/app/model/Exhibitions/exhibition-application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  announcementData: ExhibitionAnnouncement = new ExhibitionAnnouncement();
  exhibitionData: Exhibition = new Exhibition();
  exhibitionList: Exhibition[];
  applicationList: ExhibitionApplication[];
  selectedExhibition: Exhibition;

  constructor(private http: HttpClient) {}

  getExhibitionType() {
    return this.http.get(environment.apiUrl + 'ExhibitionType');
  }

  getVenue() {
    return this.http.get(environment.apiUrl + 'Venue');
  }

  getOrganisation() {
    return this.http.get(environment.apiUrl + 'Organisation');
  }

  getTags() {
    return this.http.get(environment.apiUrl + 'ApplicationTag');
  }

  getApplication2() {
    return this.http.get(environment.apiUrl + 'ExhibitionApplication');
  }

  getApplications() {
    return this.http
      .get(environment.apiUrl + 'ExhibitionApplication')
      .toPromise()
      .then((res) => {
        this.applicationList = res as ExhibitionApplication[];
        console.log(this.applicationList);
      });
  }

  getExhibition2() {
    return this.http.get(environment.apiUrl + 'Exhibition');
  }

  getExhibitions() {
    return this.http
      .get(environment.apiUrl + 'Exhibition')
      .toPromise()
      .then((res) => {
        this.exhibitionList = res as Exhibition[];
      });
  }

  postAnnouncement() {
    return this.http.post(
      environment.apiUrl + 'ExhibitionAnnouncement/',
      this.announcementData
    );
  }

  postExhibition(exhibition: Exhibition) {
    return this.http.post(environment.apiUrl + 'Exhibition/', exhibition);
  }

  putExhibition(newExhibition: Exhibition) {
    return this.http.put(
      environment.apiUrl + 'Exhibition/' + newExhibition.exhibitionID,
      newExhibition
    );
  }

  deleteExhibition(id: number) {
    return this.http.delete(environment.apiUrl + 'Exhibition/' + id);
  }
}
