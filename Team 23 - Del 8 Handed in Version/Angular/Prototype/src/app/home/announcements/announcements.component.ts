import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Announcement } from 'src/app/model/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  announcementList: Announcement[];
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.service.getAnnouncements().subscribe((res) => {
      this.announcementList = res as Announcement[];
      this.announcementList.sort((a, b) => {
        return <any>new Date(b.announceStamp) - <any>new Date(a.announceStamp);
      });
    });
  }
}
