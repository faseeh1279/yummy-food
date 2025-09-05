import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export class AuthInterceptor implements HttpInterceptor {
   private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the auth token from the service
    const authToken = this.authService.getAccessToken();

    // Clone the request and add the authorization header if token exists
    let authReq = request;
    if (authToken) {
      authReq = this.addTokenHeader(request, authToken);
    }

    // Send the request and handle the response
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle unauthorized errors (typically 401)
        if (error.status === 401 && authToken) {
          return this.handle401Error(authReq, next);
        }
        
        // Handle other HTTP errors
        return this.handleError(error);
      })
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = this.authService.getRefreshToken();
      
      if (refreshToken) {
        return this.authService.refreshToken(refreshToken).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            
            // Store the new tokens
            this.authService.storeTokens(token.accessToken, token.refreshToken);
            this.refreshTokenSubject.next(token.accessToken);
            
            // Retry the original request with the new token
            return next.handle(this.addTokenHeader(request, token.accessToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            
            // If refresh fails, logout the user
            this.authService.logout();
            this.router.navigate(['/login']);
            
            return throwError(err);
          })
        );
      } else {
        // No refresh token available, redirect to login
        this.authService.logout();
        this.router.navigate(['/login']);
        return throwError(Error);
      }
    } else {
      // If already refreshing, wait until the token is available
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addTokenHeader(request, token));
        })
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      
      // You can add more specific error handling based on status codes
      switch (error.status) {
        case 403:
          errorMessage = 'You do not have permission to perform this action.';
          this.router.navigate(['/unauthorized']);
          break;
        case 404:
          errorMessage = 'The requested resource was not found.';
          break;
        case 500:
          errorMessage = 'Internal server error. Please try again later.';
          break;
      }
    }
    
    // You can log errors to a service here
    console.error(errorMessage);
    
    return throwError(error);
  }
}