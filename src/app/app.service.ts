import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const options = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseurl = 'http://localhost:4000/api';
  public members$ = new BehaviorSubject<any>(null);
  loggedIn: any = true;
  memberId: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.memberId = params['memberId'];
    });
  }

  getAllMember(): Observable<any> {
    return this.http
      .get(`${this.baseurl}/member`, httpOptions)
      .pipe(map((response) => response));
  }

  editMember(id: string, userObj: any): Observable<any> {
    return this.http
      .put(`${this.baseurl}/member/${id}`, userObj, httpOptions)
      .pipe(map((response) => response));
  }

  updateMember(userObj: any): Observable<any> {
    return this.http
      .post(`${this.baseurl}/member`, userObj, httpOptions)
      .pipe(map((response) => response));
  }

  signIn(payload: any): Observable<any> {
    return this.http
      .post(`${this.baseurl}/auth/signin`, payload, httpOptions)
      .pipe(map((response) => response));
  }

  updatePicture(id: string, image: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http
      .post(`${this.baseurl}/member/${id}/avatar`, formData, options)
      .pipe(map((response) => response));
  }
}
