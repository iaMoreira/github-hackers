import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(0);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.currentUserSubject.next(this.getUser());
  }


  getUser(): any {
    const user = window.localStorage.getItem('user');
    if (user) {
      this.isAuthenticatedSubject.next(true);
    }
    return JSON.parse(user);
  }

  setUser(user): void {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  deleteUser(): void {
    window.localStorage.removeItem('user');
    this.currentUserSubject.next({});
    this.isAuthenticatedSubject.next(false);
  }

}
