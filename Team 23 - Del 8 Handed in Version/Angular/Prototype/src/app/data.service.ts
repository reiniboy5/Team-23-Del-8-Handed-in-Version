import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './model/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { take, takeUntil, map, filter, switchMap } from 'rxjs/operators';
import { UserType } from './model/Users/user-type';
import { Suburb } from './model/Users/suburb';
import { City } from './model/Users/city';
import { Country } from './model/Users/country';
import { Province } from './model/Users/province';
import { ArtClass } from './model/ArtClasses/art-class';
import { Exhibition } from './model/Exhibitions/exhibition';
import { Artwork } from './model/Artworks/artwork';
import { Booking } from './model/Bookings/booking';
import { ClassTeacher } from './model/ArtClasses/class-teacher';
import { Payment } from './model/Payments/payment';
import { EmailValidator } from '@angular/forms';
import { Feedback } from './model/ArtClasses/feedback';
import { Timer } from './model/timer';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //https://localhost:44353/api/Login
  port = 44353;
  apiURL = 'https://localhost:' + this.port + '/api';
  weatherApiURL =
    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={96d4bffad02c2379905562a814c8e591}';

  user: User;
  artclass: ArtClass;
  exhibition: Exhibition;
  artwork: Artwork;
  listUserTypes: UserType[];
  listSuburbs: Suburb[];
  listCities: City[];
  listCountries: Country[];
  listProvinces: Province[];
  sharedData: any;
  teacherData: any;
  venueData: any;
  organisationData: any;
  artClassTypeData: any;
  timestamp: string;
  dateofbirth: string;
  monthseperator: string;
  dayseperator: string;
  loginInUserData: any;
  timerData: Timer;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTimer(id: number) {
    return this.http.get(this.apiURL + '/Timer/' + id);
  }

  loginUser(user) {
    let params = new HttpParams()
      .set('UserName', user.UserName)
      .set('password', user.Password);

    return this.http
      .get<User>(this.apiURL + '/Login/' + user.UserName + '/' + user.Password)
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllUserTypes(): Promise<any> {
    return this.http.get(this.apiURL + '/UserType').toPromise();
  }

  getAllSuburbs(): Promise<any> {
    return this.http.get(this.apiURL + '/Surburb').toPromise();
  }

  getAllCities(): Promise<any> {
    return this.http.get(this.apiURL + '/City').toPromise();
  }

  getAllCountries(): Promise<any> {
    return this.http.get(this.apiURL + '/Country').toPromise();
  }

  getAllProvinces(): Promise<any> {
    return this.http.get(this.apiURL + '/Province').toPromise();
  }

  getAllArtwork(): Promise<any> {
    return this.http.get(this.apiURL + '/Artwork').toPromise();
  }

  getArtClasses() {
    return this.http.get(this.apiURL + '/ArtClass');
  }

  getAllArtClasses(): Promise<any> {
    return this.http.get(this.apiURL + '/ArtClass').toPromise();
  }

  getExhibitions() {
    return this.http.get(this.apiURL + '/Exhibition');
  }

  getAllExhibitions(): Promise<any> {
    return this.http.get(this.apiURL + '/Exhibition').toPromise();
  }

  getArtClass(id): Promise<any> {
    return this.http.get(this.apiURL + '/ArtClass/' + id).toPromise();
  }

  getVenue(id): Promise<any> {
    return this.http.get(this.apiURL + '/Venue/' + id).toPromise();
  }

  requestRefund(id): Promise<any> {
    return this.http.post(this.apiURL + '/Refund', +id).toPromise();
  }

  resetPassword(email): Promise<any> {
    console.log(email);
    http: return this.http
      .post(this.apiURL + '/Login', email, this.httpOptions)
      .toPromise();
  }

  getTeacher(id): Promise<any> {
    return this.http.get(this.apiURL + '/ClassTeacher/' + id).toPromise();
  }
  getClassType(id): Promise<any> {
    return this.http.get(this.apiURL + '/ArtClassType/' + id).toPromise();
  }
  getOrganisation(id): Promise<any> {
    return this.http.get(this.apiURL + '/Organisation/' + id).toPromise();
  }

  getAllBookings(): Promise<any> {
    return this.http.get(this.apiURL + '/Booking').toPromise();
  }

  getAllPayments() {
    return this.http.get(this.apiURL + '/Payment').toPromise();
  }

  getAllRefunds() {
    return this.http.get(this.apiURL + '/Refund').toPromise();
  }

  getAllClassTeachers() {
    return this.http.get(this.apiURL + '/ClassTeacher');
  }

  addUser(user): Promise<any> {
    console.table(user);

    this.timestamp = user.timestamp + '.098Z';

    if (user.UserDOB.month > 9) {
      this.monthseperator = '-';
    } else {
      this.monthseperator = '-0';
    }

    if (user.UserDOB.day > 9) {
      this.dayseperator = '-';
    } else {
      this.dayseperator = '-0';
    }

    this.dateofbirth =
      user.UserDOB.year +
      this.monthseperator +
      user.UserDOB.month +
      this.dayseperator +
      user.UserDOB.day +
      'T00:00:00.000Z';

    user = {
      userID: 0,
      userName: user.UserName,
      userFirstName: user.UserFirstName,
      userLastName: user.UserLastName,
      userEmail: user.UserEmail,
      userPhoneNumber: user.UserPhoneNumber,
      userPassword: user.UserPassword,
      userDOB: this.dateofbirth,
      userAddressLine1: user.UserAddressLine1,
      userAddressLine2: user.UserAddressLine2,
      userPostalCode: user.UserPostalCode,
      artistBio: user.ArtistBio,
      userTypeID: user.UserTypeId,
      suburbID: user.SuburbId,
      timestamp: this.timestamp,
      isVerified: false,
      profilePicture: user.profilePicture,
    };

    console.table(user);
    return this.http
      .post<User>(this.apiURL + '/User', user, this.httpOptions)
      .toPromise();
  }

  updateUser(user) {
    user.profilePicture = user.base64Picture;

    return this.http
      .put<User>(this.apiURL + '/User/' + user.userID, user, this.httpOptions)
      .toPromise();
  }

  verifyAccount(id) {
    console.log(id);

    return this.http
      .put<any>(this.apiURL + '/Login/' + id, this.httpOptions)
      .toPromise();
  }

  addArtClass(artclass): Observable<ArtClass> {
    console.log(artclass);

    return this.http
      .post<ArtClass>(this.apiURL + '/ArtClass', artclass)
      .pipe(retry(1), catchError(this.handleError));
  }

  addExhibition(exhibition): Observable<Exhibition> {
    console.log(exhibition);

    return this.http
      .post<Exhibition>(
        this.apiURL + '/Exhibition',
        JSON.stringify(exhibition),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  addBooking(booking): Promise<any> {
    console.log(booking);

    return this.http
      .post<Booking>(this.apiURL + '/Booking', booking, this.httpOptions)
      .toPromise();
  }

  cancelApplication(id: number) {
    return this.http.delete(this.apiURL + '/ExhibitionApplication/' + id);
  }

  cancelBooking(id: number) {
    return this.http.delete(this.apiURL + '/Booking/' + id);
  }

  addFeedback(feedBack): Promise<any> {
    console.log(feedBack);

    return this.http
      .post<Feedback>(this.apiURL + '/Feedback', feedBack, this.httpOptions)
      .toPromise();
  }

  addApplicationTag(tag) {
    tag = {
      applicationTagID: 0,
      applicationArtworkTitle: tag.applicationArtworkTitle,
      applicationDimension: tag.applicationDimension,
      price: tag.price,
      medium: tag.medium,
      exhibitionApplicationID: tag.exhibitionApplicationID,
      exhibitionID: tag.exhibitionID,
    };

    console.log(tag);
    return this.http
      .post<Feedback>(this.apiURL + '/ApplicationTag', tag, this.httpOptions)
      .toPromise();
  }

  getAllApplicationTags() {
    return this.http.get(this.apiURL + '/ApplicationTag').toPromise();
  }

  addExhibitionApplication(exhibitionApplication): Promise<any> {
    console.log(exhibitionApplication);

    return this.http
      .post<Feedback>(
        this.apiURL + '/ExhibitionApplication',
        exhibitionApplication,
        this.httpOptions
      )
      .toPromise();
  }

  getApplications() {
    return this.http.get(this.apiURL + '/ExhibitionApplication').toPromise();
  }

  addPayment(payment): Promise<any> {
    console.log(payment);
    return this.http
      .post<Payment>(this.apiURL + '/Payment', payment, this.httpOptions)
      .toPromise();
  }

  removeTag(id) {
    return this.http
      .delete<any>(this.apiURL + '/ApplicationTag/' + id, this.httpOptions)
      .toPromise();
  }

  addClassTeacher(classteacher): Observable<ClassTeacher> {
    console.log(classteacher);

    return this.http
      .post<ClassTeacher>(
        this.apiURL + '/ClassTeacher',
        JSON.stringify(classteacher),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getWeather() {
    return this.http.get(this.weatherApiURL).toPromise();
  }

  getAllSurfaceType() {
    return this.http.get(this.apiURL + '/SurfaceType').toPromise();
  }
  getAllMediumTypes() {
    return this.http.get(this.apiURL + '/MediumType').toPromise();
  }
  getAllArtworkStatuses() {
    return this.http.get(this.apiURL + '/ArtworkStatus').toPromise();
  }
  getAllDimesisons() {
    return this.http.get(this.apiURL + '/ArtworkDimension').toPromise();
  }
  getAllFrameColors() {
    return this.http.get(this.apiURL + '/FrameColour').toPromise();
  }
  getAllArtworkTypes() {
    return this.http.get(this.apiURL + '/ArtworkType').toPromise();
  }

  getAnnouncements() {
    return this.http.get(this.apiURL + '/Announcement');
  }

  addArtwork(artwork): Promise<any> {
    console.log(artwork);

    return this.http
      .post<Artwork>(this.apiURL + '/Artwork', artwork, this.httpOptions)
      .toPromise();
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';

    // Get client-side error
    errorMessage = error.error;

    console.log(errorMessage);

    // this.toastr.error(errorMessage, 'Error',{ disableTimeOut:true});

    return throwError(errorMessage);
  }
}
