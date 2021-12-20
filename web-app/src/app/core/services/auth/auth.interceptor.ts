import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request).pipe(
      catchError((httpErrorResponse: any) => {
        if (httpErrorResponse instanceof HttpErrorResponse) {
          if (httpErrorResponse.status == 401) {
            this.authService.logOut();
          }
          console.error('error ' + JSON.stringify(httpErrorResponse));
        }
        return of(httpErrorResponse);
      })
    );
  }

}
