import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  dataUrl = 'https://jsonplaceholder.typicode.com/users';
  userData: any = [];
  constructor(private http: HttpClient) { }

  getUserData() {    
    const promise = this.http.get(this.dataUrl)
      .toPromise()
      .then(userList => {        
        this.userData = userList;
        return userList;
      });
    return promise; 
  }
}
