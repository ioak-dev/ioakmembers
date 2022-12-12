import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseurl="http://localhost:4000/api"
  public members$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  getAllMember(): Observable<any> {
    return this.http
      .get(`${this.baseurl}/member`, httpOptions)
      .pipe(map((response) => response));
  }

  editMember(id: string,userObj: any): Observable<any> {
    return this.http
      .put(`${this.baseurl}/member/${id}`,userObj, httpOptions)
      .pipe(map((response) => response));
  }

  updateMember(userObj: any): Observable<any> {
    return this.http
      .post(`${this.baseurl}/member`, userObj, httpOptions)
      .pipe(map((response) => response));
  }
}
