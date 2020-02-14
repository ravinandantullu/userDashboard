import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userData = this.userService.userData;
      this.userDetails = (userData.filter((user) => user.id == params['id']))[0];
    });
  }
}
