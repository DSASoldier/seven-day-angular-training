import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component implements OnInit {

  pageTitle:string = '';
  userRole:string = '';
  fragment:string | null = null;
  category:string | null = null;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
    this.userRole = this.route.snapshot.data['role'];
    this.fragment = this.route.snapshot.fragment;
    this.category = this.route.snapshot.queryParamMap.get('category');

    console.log('Page Title:', this.pageTitle); 
    console.log('User Role:', this.userRole); 
    console.log('fragment:',this.fragment);
    console.log('category',this.category);
  }
  
}
