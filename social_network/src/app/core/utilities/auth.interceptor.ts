import { HttpRequest, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { HttpInterceptorFn } from '@angular/common/http'; 
import { Observable } from 'rxjs';

// Define la función interceptor con la firma correcta
export const authInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);  // Inyectar el AuthService
  
  const token = authService.getToken();

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
