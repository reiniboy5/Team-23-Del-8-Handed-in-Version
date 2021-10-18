import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from 'src/app/model/Users/announcement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  announcementData: Announcement = new Announcement();
  constructor(private http: HttpClient) {}

  postAnnouncement(announcement: Announcement) {
    return this.http.post(environment.apiUrl + 'Announcement/', announcement);
  }
}
