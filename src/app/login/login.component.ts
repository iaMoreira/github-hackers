import { GithubService } from './../services/github.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username = '';

  constructor(
    private router: Router,
    private githubService: GithubService) { }

  onChange(value) {
    this.username = value;
  }

  submit() {
    this.githubService.getByUsername(this.username)
      .subscribe(
        () => this.router.navigateByUrl('/events'),
      );
  }


}
