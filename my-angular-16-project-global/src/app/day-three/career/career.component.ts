import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  productIds: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Use getAll() to retrieve all values for a given key
      console.log(params);
      // console.log(params.getAll('canAccess'));
      // console.log(params.getAll('isReady'));

    });

    this.route.params.subscribe(params=>{
      console.log(params);
    })
    
  }
}
