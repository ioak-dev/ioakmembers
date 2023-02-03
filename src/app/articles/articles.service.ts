import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InitializationService } from '../initialization.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseurl = environment.apiUrl;
  private loggedInUser: any;

  constructor(
    private http: HttpClient,
    private initializationService: InitializationService) {
    this.initializationService.loggedInUser$.subscribe((result) => {
      this.loggedInUser = result;
      // console.log(this.loggedInUser);
    });
  }

  getAllArticles(): Observable<any> {
    return this.http
      .get(`${this.baseurl}/article`, httpOptions)
      .pipe(map((response) => response));
  }

  addArticle(articleObj: any): Observable<any> {
    const out = axios.post(`${this.baseurl}/article`, articleObj, {
      headers: {
        'authorization': this.loggedInUser?.token,
        'Content-Type': 'application/json'
      }
    });
    return from(out);
  }
}
