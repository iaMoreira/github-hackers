import { UserService } from './../services/user.service';
import { GithubService } from '../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(
    private githubService: GithubService,
    private userService: UserService
    ) { }

  ngOnInit() {
    const username = this.userService.getUser().login;
    this.githubService.getEvents(username).subscribe(
      events => this.events = events
    );
  }

}
