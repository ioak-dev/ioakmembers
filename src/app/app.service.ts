import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../environments/environment';
import axios from 'axios';
import { InitializationService } from './initialization.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // baseurl = 'http://localhost:4000/api';
  baseurl = environment.apiUrl;
  baseAuthliteUrl=environment.authliteApiUrl;
  public members$ = new BehaviorSubject<any>(null);
  loggedIn: any = true;
  memberId: any;
  private loggedInUser: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private initializationService: InitializationService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.memberId = params['memberId'];
    });

    this.initializationService.loggedInUser$.subscribe((result) => {
      this.loggedInUser = result;
      // console.log(this.loggedInUser);
    });
  }

  getAllMember(): Observable<any> {
    return this.http
      .get(`${this.baseurl}/member`, httpOptions)
      .pipe(map((response) => response));
  }

  editMember(id: string, userObj: any): Observable<any> {
    const out = axios.put(`${this.baseurl}/member/${id}`, userObj, {
      headers: {
        'authorization': this.loggedInUser.token,
        'Content-Type': 'application/json'
      }
    })
    return from(out).pipe(map((response) => response));
  }

  updateMember(userObj: any): Observable<any> {
    const out = axios.post(`${this.baseurl}/member`, userObj, {
      headers: {
        'authorization': this.loggedInUser.token,
        'Content-Type': 'application/json'
      }
    });
    return from(out);
  }

  signIn(payload: any): Observable<any> {
    return this.http
    .post(`${this.baseAuthliteUrl}/${environment.realm}/user/auth/signin`, {...payload,response_type:"token"}, httpOptions)
      // .post(`${this.baseurl}/auth/signin`, payload, httpOptions)
      .pipe(map((response) => response));
  }

  updatePicture(id: string, image: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);

    const _httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    };
    // return this.http
    //   .post(`${this.baseurl}/member/${id}/avatar`, formData)
    //   .pipe(map((response) => response));
    // var formData = new FormData();
    // formData.append("file", image);
    const out = axios.post(`${this.baseurl}/member/${id}/avatar`, formData, {
      headers: {
        'authorization': this.loggedInUser.token,
        'Content-Type': 'multipart/form-data'
      }
    });

    return from(out);
  }

  getMemberById(id: string): Observable<any> {
    return this.http
      .get(`${this.baseurl}/member/${id}`, httpOptions)
      .pipe(map((response) => response));
  }

  getMemberByIdForEdit(id: string): Observable<any> {
    return this.http
      .get(`${this.baseurl}/member/${id}/edit`, httpOptions)
      .pipe(map((response) => response));
  }

  forgotPassword(email: any): Observable<any> {
    return this.http
      .post(`${this.baseurl}/member/forgotpassword`, email, httpOptions)
      .pipe(map((response) => response));
  }

  changePassword(password: any): Observable<any> {
    console.log(this.loggedInUser.token);
    return this.http
      .post(`${this.baseurl}/auth/changepassword`, password, {
        headers: {
          'Authorization': this.loggedInUser.token,
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((response) => response));
  }
}
