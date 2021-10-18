import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtClass } from 'src/app/model/ArtClasses/art-class';
import { ArtClassAnnouncement } from 'src/app/model/ArtClasses/art-class-announcement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtClassService {
  artClassData: ArtClass = new ArtClass();
  announcementData: ArtClassAnnouncement = new ArtClassAnnouncement();
  artClassList: ArtClass[];
  selectedArtClass: ArtClass;
  constructor(private http: HttpClient) {}

  getArtClassType() {
    return this.http.get(environment.apiUrl + 'ArtClassType');
  }

  getPayments() {
    return this.http.get(environment.apiUrl + 'Payment');
  }

  getRefunds() {
    return this.http.get(environment.apiUrl + 'Refund');
  }

  getClassTeacher() {
    return this.http.get(environment.apiUrl + 'ClassTeacher');
  }

  getVenue() {
    return this.http.get(environment.apiUrl + 'Venue');
  }

  getOrganisation() {
    return this.http.get(environment.apiUrl + 'Organisation');
  }

  getArtClass2() {
    return this.http.get(environment.apiUrl + 'ArtClass');
  }

  getArtClass() {
    return this.http
      .get(environment.apiUrl + 'ArtClass')
      .toPromise()
      .then((res) => {
        this.artClassList = res as ArtClass[];
      });
  }

  postAnnouncement() {
    return this.http.post(
      environment.apiUrl + 'ArtClassAnnouncement/',
      this.announcementData
    );
  }

  postArtClass(artClass: ArtClass) {
    return this.http.post(environment.apiUrl + 'ArtClass/', artClass);
  }

  putArtClass(newArtClass: ArtClass) {
    return this.http.put(
      environment.apiUrl + 'ArtClass/' + newArtClass.artClassID,
      newArtClass
    );
  }

  deleteArtClass(id: number) {
    return this.http.delete(environment.apiUrl + 'ArtClass/' + id);
  }
}
