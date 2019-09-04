import { Injectable } from '@angular/core';
import { JwtStorageService } from './jwt-storage.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private token: JwtStorageService) { }

  intercept(req, res){
    const token = this.token.getToken();
    let tokenizedReq= req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.handle(tokenizedReq);
  }
}
