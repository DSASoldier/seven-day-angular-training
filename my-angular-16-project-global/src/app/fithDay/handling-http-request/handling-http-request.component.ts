import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-handling-http-request',
  templateUrl: './handling-http-request.component.html',
  styleUrls: ['./handling-http-request.component.css']
})
export class HandlingHttpRequestComponent {
  items: any[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private dataService:TestingService){}

}
