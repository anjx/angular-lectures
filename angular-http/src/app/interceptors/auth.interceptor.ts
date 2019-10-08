import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = 'blah-blah';
    const token = '';
    let authReq = req;

    if (token) {
      authReq = authReq.clone({
        headers: authReq.headers
          .set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(authReq);
  }
}
