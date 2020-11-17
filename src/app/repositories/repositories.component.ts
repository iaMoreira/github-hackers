import { UserService } from './../services/user.service';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories = [];

  constructor(
    private githubService: GithubService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const username = this.userService.getUser().login;
    this.githubService.getRepositories(username).subscribe(
      data => this.repositories = data
    );
  }

}
