import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated
    );

    this.userService.currentUser.subscribe(
      user => this.currentUser = user
    );
  }

  logout() {
    this.userService.deleteUser();
    this.router.navigate(['/']);
  }

}
