import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private data :string[] = ['parent service','child service']
  constructor() { }

  getData(): string[]{
    return this.data;
  }
}
