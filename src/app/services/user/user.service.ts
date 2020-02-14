import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  dataUrl = 'https://jsonplaceholder.typicode.com/users';
  userData;
  userDataSubject: any = new Subject<any>();

  constructor(private http: HttpClient) {
    this.http.get(this.dataUrl).subscribe((data) => {
      this.userDataSubject.next(data);
    });
  }
}
