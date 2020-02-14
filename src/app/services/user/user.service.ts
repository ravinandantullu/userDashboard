import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable()
export class UserService {

  dataUrl = 'https://jsonplaceholder.typicode.com/users';
  userData: User[];

  constructor(private http: HttpClient) { }

  getUserData() {
    this.http.get(this.dataUrl).subscribe((data: User[]) => {
      this.userData = data;
    });
  }
}
