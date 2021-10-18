import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtClassReportComponent } from './reports/art-class-report/art-class-report.component';
import { ClassTeacherReportComponent } from './reports/class-teacher-report/class-teacher-report.component';
import { AddTeacherComponent } from './classes/add-teacher/add-teacher.component';
import { ClassesComponent } from './classes/classes.component';
import { NewClassComponent } from './classes/new-class/new-class.component';
import { UpdateClassComponent } from './classes/update-class/update-class.component';
import { ExhibitionReportComponent } from './reports/exhibition-report/exhibition-report.component';
import { ApplicationsComponent } from './exhibitions/applications/applications.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { NewExhibitionComponent } from './exhibitions/new-exhibition/new-exhibition.component';
import { TagsComponent } from './exhibitions/tags/tags.component';
import { UpdateExhibitionComponent } from './exhibitions/update-exhibition/update-exhibition.component';
import { FeedbackReportComponent } from './reports/feedback-report/feedback-report.component';
import { NewUserReportComponent } from './reports/new-user-report/new-user-report.component';
import { ClassesScheduleComponent } from './schedules/classes-schedule/classes-schedule.component';
import { ExhibitionScheduleComponent } from './schedules/exhibition-schedule/exhibition-schedule.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArtistsComponent } from './artists/artists.component';
import { ViewArtistComponent } from './artists/view-artist/view-artist.component';
import { MediumsComponent } from './mediums/mediums.component';
import { SurfacesComponent } from './surfaces/surfaces.component';
import { InvitationsComponent } from './exhibitions/invitations/invitations.component';
import { SendInvitationComponent } from './exhibitions/invitations/send-invitation/send-invitation.component';
import { ViewTeachersComponent } from './classes/view-teachers/view-teachers.component';
import { UpdateTeacherComponent } from './classes/update-teacher/update-teacher.component';
import { DeleteUserComponent } from './exhibitions/delete-user/delete-user.component';
import { RefundsComponent } from './classes/refunds/refunds.component';
import { ArchivesComponent } from './artwork/archives/archives.component';
import { LoginComponent } from './login/login.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // Home
  { path: 'home', component: HomeComponent },

  // Announcement
  { path: 'announcement', component: AnnouncementComponent },

  // Timer
  { path: 'timer', component: TimerComponent },

  //Exhibition Routing

  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'new-exhibition', component: NewExhibitionComponent },
  { path: 'update-exhibition', component: UpdateExhibitionComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'invitations', component: InvitationsComponent },
  { path: 'send-invitation', component: SendInvitationComponent },
  { path: 'delete-user', component: DeleteUserComponent },

  //Art Classes Routing
  { path: 'classes', component: ClassesComponent },
  { path: 'update-class', component: UpdateClassComponent },
  { path: 'new-class', component: NewClassComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'view-teachers', component: ViewTeachersComponent },
  { path: 'update-teacher', component: UpdateTeacherComponent },
  { path: 'refunds', component: RefundsComponent },

  //Schedule Routing
  { path: 'schedule-exhibitions', component: ExhibitionScheduleComponent },
  { path: 'schedule-classes', component: ClassesScheduleComponent },

  // Reports Routing
  { path: 'user-report', component: NewUserReportComponent },
  { path: 'class-report', component: ArtClassReportComponent },
  { path: 'teacher-report', component: ClassTeacherReportComponent },
  { path: 'exhibition-report', component: ExhibitionReportComponent },
  { path: 'feedback-report', component: FeedbackReportComponent },

  // Artwork Routings
  { path: 'artwork', component: ArtworkComponent },
  { path: 'archives', component: ArchivesComponent },

  // Location Data
  { path: 'location', component: LocationComponent },

  // Artists Routings
  { path: 'artists', component: ArtistsComponent },
  { path: 'view-artist', component: ViewArtistComponent },

  // Medium Routings
  { path: 'mediums', component: MediumsComponent },

  // Surface Routings
  { path: 'surfaces', component: SurfacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
