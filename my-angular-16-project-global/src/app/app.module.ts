import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { ParentComponent } from './secondDay/parent/parent.component';
import { ChildComponent } from './secondDay/child/child.component';
import { PracticeComponent } from './fourthDay/practice/practice.component';
import { Page1Component } from './fourthDay/page1/page1.component';
import { Page2Component } from './fourthDay/page2/page2.component';
import { Page3Component } from './fourthDay/page3/page3.component';
import { RouterLink } from '@angular/router';
import { Page21Component } from './fourthDay/page21/page21.component';
import { Page22Component } from './fourthDay/page22/page22.component';
import { LoginComponent } from './fourthDay/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayTwoComponent,
    ParentComponent,
    ChildComponent,
    PracticeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page21Component,
    Page22Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
