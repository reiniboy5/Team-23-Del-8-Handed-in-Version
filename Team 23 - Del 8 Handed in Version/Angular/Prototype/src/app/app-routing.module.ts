import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyExhibitionComponent } from './home/apply-exhibition/apply-exhibition.component';
import { ArtistAccountComponent } from './artist-home/artist-account/artist-account.component';
import { ArtistAnnouncementComponent } from './artist-home/artist-announcement/artist-announcement.component';
import { ArtistBookingsComponent } from './artist-home/artist-bookings/artist-bookings.component';
import { ArtistCompletedComponent } from './artist-home/artist-bookings/artist-completed/artist-completed.component';
import { ArtistFeedbackComponent } from './artist-home/artist-bookings/artist-feedback/artist-feedback.component';
import { ArtistRefundsComponent } from './artist-home/artist-bookings/artist-refunds/artist-refunds.component';
import { ArtistbookingComponent } from './artist-home/artist-bookings/artistbooking/artistbooking.component';

import { ArtistExhibitionComponent } from './artist-home/artist-exhibition/artist-exhibition.component';
import { ArtistExhibitionsComponent } from './artist-home/artist-exhibitions/artist-exhibitions.component';
import { ArtistHomeComponent } from './artist-home/artist-home.component';
import { ArtistShowroomComponent } from './artist-home/artist-showroom/artist-showroom.component';
import { ArtistWelcomePageComponent } from './artist-home/artist-welcome-page/artist-welcome-page.component';
import { ClassComponent } from './artist-home/class/class.component';
import { ClassesComponent } from './artist-home/classes/classes.component';
import { ContactArtistComponent } from './artist-home/contact-artist/contact-artist.component';
import { InvitationsComponent } from './artist-home/invitations/invitations.component';
import { MyArtworkComponent } from './artist-home/my-artwork/my-artwork.component';
import { MyExhibitionsComponent } from './home/my-exhibitions/my-exhibitions.component';
import { AcceptedExhibitionsComponent } from './home/my-exhibitions/accepted-exhibitions/accepted-exhibitions.component';
import { ApplicationsComponent } from './home/my-exhibitions/applications/applications.component';
import { GenerateTagsComponent } from './home/my-exhibitions/generate-tags/generate-tags.component';
import { AddClassComponent } from './home/add-class/add-class.component';
import { AddExhibitionComponent } from './home/add-exhibition/add-exhibition.component';
import { AnnouncementsComponent } from './home/announcements/announcements.component';
import { ArtClassComponent } from './home/art-class/art-class.component';
import { ArtClassesComponent } from './home/art-classes/art-classes.component';
import { ArtworkShowroomComponent } from './home/artwork-showroom/artwork-showroom.component';
import { ContactUserComponent } from './home/contact-user/contact-user.component';
import { ExhibitionComponent } from './home/exhibition/exhibition.component';
import { ExhibitionsComponent } from './home/exhibitions/exhibitions.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './home/my-bookings/bookings/bookings.component';
import { CompletedClassComponent } from './home/my-bookings/completed-class/completed-class.component';
import { FeedbackComponent } from './home/my-bookings/feedback/feedback.component';
import { MyBookingsComponent } from './home/my-bookings/my-bookings.component';
import { RefundsComponent } from './home/my-bookings/refunds/refunds.component';
import { UserAccountComponent } from './home/user-account/user-account.component';
import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterArtistComponent } from './register-artist/register-artist.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyApplicationComponent } from './home/my-exhibitions/my-application/my-application.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { AddArtworkComponent } from './home/add-artwork/add-artwork.component';



const routes: Routes = [
  // Login and Register Routes
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'new-password', component: NewPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-artist', component: RegisterArtistComponent},
  {path: 'verify-account/:id', component: VerifyAccountComponent},

    // User Page Routes
  { path: 'home', component: HomeComponent, children: [
    {path: 'my-exhibitions', component: MyExhibitionsComponent, children: [
      {path: 'accepted', component: AcceptedExhibitionsComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'generate-tags', component: GenerateTagsComponent},
      {path: 'my-application', component: MyApplicationComponent}
    ]},
    {path: 'artist-exhibitions', component: ArtistExhibitionsComponent},
    {path: 'artist-exhibition', component: ArtistExhibitionComponent},
    {path: 'apply-exhibition', component: ApplyExhibitionComponent},
    { path: 'art-classes', component: ArtClassesComponent},
    { path: 'welcome', component: WelcomePageComponent},
    { path: 'art-class', component: ArtClassComponent},
    { path: 'add-class', component: AddClassComponent},
    { path: 'exhibitions', component: ExhibitionsComponent},
    { path: 'add-exhibition', component: AddExhibitionComponent},
    { path: 'artwork-showroom', component: ArtworkShowroomComponent},
    { path: 'add-artwork', component: AddArtworkComponent},
    { path: 'announcements', component: AnnouncementsComponent},
    { path: 'contact-user', component: ContactUserComponent},
    { path: 'user-account', component: UserAccountComponent},
    { path: 'exhibition', component: ExhibitionComponent},
    { path: 'my-bookings', component: MyBookingsComponent, children: [
      { path: 'bookings', component: BookingsComponent},
      { path: 'refunds', component: RefundsComponent},
      { path: 'completed', component: CompletedClassComponent},
      { path: 'feedback', component: FeedbackComponent}
    ]}
  ]},

  // Artist Page Routes
  {path: 'artist-home', component: ArtistHomeComponent, children: [
      {path: 'my-exhibitions', component: MyExhibitionsComponent, children: [
      {path: 'accepted', component: AcceptedExhibitionsComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'generate-tags', component: GenerateTagsComponent}
    ]},
    
    {path: 'artist-exhibitions', component: ArtistExhibitionsComponent},
    {path: 'artist-exhibition', component: ArtistExhibitionComponent},
    {path: 'my-artwork', component: MyArtworkComponent},
    {path: 'artist-showroom', component: ArtistShowroomComponent},
    {path: 'artist-welcome', component: ArtistWelcomePageComponent},
    //{path: 'apply-exhibition', component: ApplyExhibitionComponent},
    {path: 'artist-announcements', component: ArtistAnnouncementComponent},
    {path: 'invitations', component: InvitationsComponent},
    {path: 'contact-artist', component: ContactArtistComponent},
    {path: 'artist-account', component: ArtistAccountComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'class', component: ClassComponent},
    {path: 'artist-bookings', component: ArtistBookingsComponent, children: [ 
      { path: 'artistbooking-list', component: ArtistbookingComponent},
      { path: 'artist-refunds', component: ArtistRefundsComponent},
      { path: 'artist-completed', component: ArtistCompletedComponent},
      { path: 'artist-feedback', component: ArtistFeedbackComponent}


    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
