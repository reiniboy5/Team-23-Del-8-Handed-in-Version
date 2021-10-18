import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDateCustomParserFormatter } from 'src/ngb-date-custom-parser-formatter';
import { NgxMaskModule } from 'ngx-mask';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtClassesComponent } from './home/art-classes/art-classes.component';
import { ArtClassComponent } from './home/art-class/art-class.component';
import { MyBookingsComponent } from './home/my-bookings/my-bookings.component';
import { BookingsComponent } from './home/my-bookings/bookings/bookings.component';
import { RefundsComponent } from './home/my-bookings/refunds/refunds.component';
import { CompletedClassComponent } from './home/my-bookings/completed-class/completed-class.component';
import { FeedbackComponent } from './home/my-bookings/feedback/feedback.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ArtistHomeComponent } from './artist-home/artist-home.component';
import { ArtistNavbarComponent } from './artist-home/artist-navbar/artist-navbar.component';
import { MyExhibitionsComponent } from './home/my-exhibitions/my-exhibitions.component';
import { ArtistExhibitionsComponent } from './artist-home/artist-exhibitions/artist-exhibitions.component';
import { ArtistExhibitionComponent } from './artist-home/artist-exhibition/artist-exhibition.component';
import { ArtistBookingsComponent } from './artist-home/artist-bookings/artist-bookings.component';
import { ClassComponent } from './artist-home/class/class.component';
import { ClassesComponent } from './artist-home/classes/classes.component';
import { ArtistbookingComponent } from './artist-home/artist-bookings/artistbooking/artistbooking.component';
import { ApplyExhibitionComponent } from './home/apply-exhibition/apply-exhibition.component';

import { ArtistRefundsComponent } from './artist-home/artist-bookings/artist-refunds/artist-refunds.component';
import { ArtistCompletedComponent } from './artist-home/artist-bookings/artist-completed/artist-completed.component';
import { ArtistFeedbackComponent } from './artist-home/artist-bookings/artist-feedback/artist-feedback.component';
import { ExhibitionsComponent } from './home/exhibitions/exhibitions.component';
import { ExhibitionComponent } from './home/exhibition/exhibition.component';
import { UserAccountComponent } from './home/user-account/user-account.component';
import { ArtistAccountComponent } from './artist-home/artist-account/artist-account.component';
import { InvitationsComponent } from './artist-home/invitations/invitations.component';

import { MyArtworkComponent } from './artist-home/my-artwork/my-artwork.component';
import { ArtistShowroomComponent } from './artist-home/artist-showroom/artist-showroom.component';
import { ArtworkShowroomComponent } from './home/artwork-showroom/artwork-showroom.component';
import { AnnouncementsComponent } from './home/announcements/announcements.component';
import { RegisterArtistComponent } from './register-artist/register-artist.component';
import { AcceptedExhibitionsComponent } from './home/my-exhibitions/accepted-exhibitions/accepted-exhibitions.component';
import { ApplicationsComponent } from './home/my-exhibitions/applications/applications.component';
import { GenerateTagsComponent } from './home/my-exhibitions/generate-tags/generate-tags.component';
import { ContactUserComponent } from './home/contact-user/contact-user.component';
import { ContactArtistComponent } from './artist-home/contact-artist/contact-artist.component';
import { ArtistAnnouncementComponent } from './artist-home/artist-announcement/artist-announcement.component';
import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArtistWelcomePageComponent } from './artist-home/artist-welcome-page/artist-welcome-page.component';
import { AddClassComponent } from './home/add-class/add-class.component';
import { AddExhibitionComponent } from './home/add-exhibition/add-exhibition.component';
import { AddClassTeacherComponent } from './home/add-class-teacher/add-class-teacher.component';
import { AddPaymentComponent } from './home/add-payment/add-payment.component';
import { AddArtworkComponent } from './home/add-artwork/add-artwork.component';
import { AddBookingComponent } from './home/add-booking/add-booking.component';
import { DatePipe } from '@angular/common';
import { ExhibitionapplicationComponent } from './home/exhibitions/exhibitionapplication/exhibitionapplication.component';
import { MyApplicationComponent } from './home/my-exhibitions/my-application/my-application.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ArtClassesComponent,
    ArtClassComponent,
    MyBookingsComponent,
    BookingsComponent,
    RefundsComponent,
    CompletedClassComponent,
    FeedbackComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    ArtistHomeComponent,
    ArtistNavbarComponent,
    MyExhibitionsComponent,
    ArtistExhibitionsComponent,
    ArtistExhibitionComponent,
    ArtistBookingsComponent,
    ClassComponent,
    ClassesComponent,
    ArtistbookingComponent,
    ArtistRefundsComponent,
    ArtistCompletedComponent,
    ArtistFeedbackComponent,
    ExhibitionsComponent,
    ExhibitionComponent,
    UserAccountComponent,
    ArtistAccountComponent,
    InvitationsComponent,
    ApplyExhibitionComponent,
    MyArtworkComponent,
    ArtistShowroomComponent,
    ArtworkShowroomComponent,
    AnnouncementsComponent,
    RegisterArtistComponent,
    AcceptedExhibitionsComponent,
    ApplicationsComponent,
    GenerateTagsComponent,
    ContactUserComponent,
    ContactArtistComponent,
    ArtistAnnouncementComponent,
    WelcomePageComponent,
    ArtistWelcomePageComponent,
    AddClassComponent,
    AddExhibitionComponent,
    AddClassTeacherComponent,
    AddPaymentComponent,
    AddArtworkComponent,
    AddBookingComponent,
    ExhibitionapplicationComponent,
    MyApplicationComponent,
    VerifyAccountComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MdbModule,
    BrowserAnimationsModule,
    NgIdleKeepaliveModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    DataService,
    DatePipe,
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
