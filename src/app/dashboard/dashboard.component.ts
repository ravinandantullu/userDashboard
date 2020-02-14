import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList: User[] = [];
  showConfirmModal: boolean = false;
  selectedUser: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = this.userService.userData;
    this.userList.sort((a, b) => b.id - a.id);
    
  }

  showConfirm(userId) {
    this.selectedUser = userId;
    this.showConfirmModal = true;
  }

  closeModal() {
    this.showConfirmModal = false;
  }

  deleteUser() {
    const userIndex = this.userService.userData.findIndex((user) => user.id == this.selectedUser);
    this.userService.userData.splice(userIndex, 1);
    this.userList = this.userService.userData;
    this.closeModal();
  }

}
