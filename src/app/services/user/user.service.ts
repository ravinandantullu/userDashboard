import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  dataUrl = 'https://jsonplaceholder.typicode.com/users';
  userData;

  constructor(private http: HttpClient) {
    this.http.get(this.dataUrl).subscribe((data) => { this.userData = data; });
  }
}
