import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl = 'https://api.github.com/users';

  constructor(
    private api: HttpClient,
    private userService: UserService
  ) { }

  public getByUsername(username: string): Observable<any> {
      return this.api.get(`${this.baseUrl}/${username}`)
        .pipe(
          map(
          (user) => this.userService.setUser(user)
        ));
  }

  public getEvents(username: string): Observable<any> {
    return this.api.get(`${this.baseUrl}/${username}/received_events/public`);
  }

  public getRepositories(username): Observable<any>  {
    return this.api.get(`${this.baseUrl}/${username}/repos`);
  }

}
