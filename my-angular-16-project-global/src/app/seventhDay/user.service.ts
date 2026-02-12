import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userSource = new BehaviorSubject<string>('Guest');

  private apiUrl = 'https://api.example.com/items';

  constructor(private http: HttpClient) {}


  currentUser = this.userSource.asObservable();

  changeUser(newUser: string){
    this.userSource.next(newUser);
  }

  getItems(): Observable<any[]>{

    return this.http.get<any[]>(this.apiUrl);

  }
}
