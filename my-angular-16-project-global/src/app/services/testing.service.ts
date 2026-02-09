import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private data :string[] = ['parent service','child service'];

  constructor(private http: HttpClient) { }

  getData(): string[]{
    return this.data;
  }

}
