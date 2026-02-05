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
    this.route.queryParamMap.subscribe(params => {
      // Use getAll() to retrieve all values for a given key
      this.productIds = params.getAll('ids');
      console.log('Product IDs:', this.productIds);
    });
  }
}
