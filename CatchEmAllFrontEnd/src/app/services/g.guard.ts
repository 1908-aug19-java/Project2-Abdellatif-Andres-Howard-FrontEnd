import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';


@Injectable({
  providedIn: 'root'
})
export class GGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |Promise<boolean|UrlTree> | boolean |UrlTree{

      if(sessionStorage.getItem('token')==null){
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
  
}
