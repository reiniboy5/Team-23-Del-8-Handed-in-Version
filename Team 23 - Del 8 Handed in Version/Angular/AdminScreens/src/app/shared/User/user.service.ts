import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/Users/user';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Timer } from 'src/app/model/Users/timer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  loginInUserData: any;
  userLoggedIn: boolean;
  selectedTimer: Timer;
  timerData: Timer;
  constructor(private http: HttpClient) {}

  getTimer() {
    return this.http
      .get(environment.apiUrl + 'Timer/' + 1)
      .toPromise()
      .then((res) => {
        this.timerData = res as Timer;
      });
  }

  getTimer2() {
    return this.http.get(environment.apiUrl + 'Timer/' + 1);
  }

  putTimer(newTimer: Timer) {
    return this.http.put(
      environment.apiUrl + 'Timer/' + newTimer.timerID,
      newTimer
    );
  }

  loginUser(user) {
    let params = new HttpParams()
      .set('UserName', user.UserName)
      .set('password', user.Password);

    return this.http
      .get<User>(
        environment.apiUrl + 'Login/' + user.UserName + '/' + user.Password
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';

    // Get client-side error
    errorMessage = error.error;

    console.log(errorMessage);

    // this.toastr.error(errorMessage, 'Error',{ disableTimeOut:true});

    return throwError(errorMessage);
  }

  getUsers() {
    return this.http.get(environment.apiUrl + 'User');
  }

  getUser(id: number) {
    return this.http.get(environment.apiUrl + 'User/' + id);
  }
}
