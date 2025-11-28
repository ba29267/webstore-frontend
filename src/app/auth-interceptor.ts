import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  let authReq = req;

  // Attach token if exists
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle invalid / expired token
      if (error.status === 401 || error.status === 403) {
        console.warn('Unauthorized request → redirect or logout here');
      }
      return throwError(() => error);
    })
  );
};