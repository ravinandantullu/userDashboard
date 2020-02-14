import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  users;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.userData;
  }

}
