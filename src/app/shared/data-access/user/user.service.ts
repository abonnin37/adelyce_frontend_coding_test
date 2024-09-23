import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static users: User[] = [];
  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    if ( UserService.users.length === 0 )
    {
      this.http.get<User[]>('http://localhost:8080/api/users').subscribe(users => {
        UserService.users = users;

        this.users$.next(UserService.users);
      });
    }
    else
    {
      this.users$.next(UserService.users);
    }

    return this.users$;
  }
}
