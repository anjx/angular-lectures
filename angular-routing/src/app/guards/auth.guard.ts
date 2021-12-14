import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
    console.log('check Auth Guard');
    return Promise.resolve(true);
  }
}
