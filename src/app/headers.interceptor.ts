import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InitializationService } from './initialization.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private initializationService:InitializationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.initializationService.user;
    const isLoggedIn = currentUser && currentUser.token;
    if (isLoggedIn) {
        request = request.clone({
            setHeaders: {
                Authorization: `${currentUser.token}`
            }
        });
    }
    return next.handle(request);
  }
}
