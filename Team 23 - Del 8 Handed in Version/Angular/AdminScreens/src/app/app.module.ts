import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// All COMPONENTS Below============================
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { NewExhibitionComponent } from './exhibitions/new-exhibition/new-exhibition.component';
import { UpdateExhibitionComponent } from './exhibitions/update-exhibition/update-exhibition.component';
import { TagsComponent } from './exhibitions/tags/tags.component';
import { ApplicationsComponent } from './exhibitions/applications/applications.component';
import { ClassesComponent } from './classes/classes.component';
import { NewUserReportComponent } from './reports/new-user-report/new-user-report.component';
import { ArtClassReportComponent } from './reports/art-class-report/art-class-report.component';
import { ClassTeacherReportComponent } from './reports/class-teacher-report/class-teacher-report.component';
import { ExhibitionReportComponent } from './reports/exhibition-report/exhibition-report.component';
import { FeedbackReportComponent } from './reports/feedback-report/feedback-report.component';
import { UpdateClassComponent } from './classes/update-class/update-class.component';
import { NewClassComponent } from './classes/new-class/new-class.component';
import { AddTeacherComponent } from './classes/add-teacher/add-teacher.component';
import { ExhibitionScheduleComponent } from './schedules/exhibition-schedule/exhibition-schedule.component';
import { ClassesScheduleComponent } from './schedules/classes-schedule/classes-schedule.component';
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

// Angular Material Below==============
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AnnouncementComponent } from './announcement/announcement.component';
import { SearchfilterPipe } from './shared/search/searchfilter.pipe';
import { ExhibitionsearchPipe } from './shared/search/exhibitionsearch.pipe';
import { ArtClassSearchPipe } from './shared/search/art-class-search.pipe';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DatePipe } from '@angular/common';
import { ArtistSearchPipe } from './shared/search/artist-search.pipe';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { TimerComponent } from './timer/timer.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    ExhibitionsComponent,
    NewExhibitionComponent,
    UpdateExhibitionComponent,
    TagsComponent,
    ApplicationsComponent,
    ClassesComponent,
    NewUserReportComponent,
    ArtClassReportComponent,
    ClassTeacherReportComponent,
    ExhibitionReportComponent,
    FeedbackReportComponent,
    UpdateClassComponent,
    NewClassComponent,
    AddTeacherComponent,
    ExhibitionScheduleComponent,
    ClassesScheduleComponent,
    ArtworkComponent,
    ArtistsComponent,
    ViewArtistComponent,
    MediumsComponent,
    SurfacesComponent,
    InvitationsComponent,
    SendInvitationComponent,
    ViewTeachersComponent,
    UpdateTeacherComponent,
    DeleteUserComponent,
    RefundsComponent,
    ArchivesComponent,
    LoginComponent,
    AnnouncementComponent,
    SearchfilterPipe,
    ExhibitionsearchPipe,
    ArtClassSearchPipe,
    ArtistSearchPipe,
    HomeComponent,
    LocationComponent,
    TimerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
