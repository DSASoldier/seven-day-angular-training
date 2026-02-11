import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { ParentComponent } from './secondDay/parent/parent.component';
import { ChildComponent } from './secondDay/child/child.component';
import { UserFormComponent } from './fithDay/user-form/user-form.component';
import { TemplateDrivenFormComponent } from './fithDay/template-driven-form/template-driven-form.component';
import { HandlingHttpRequestComponent } from './fithDay/handling-http-request/handling-http-request.component';
import { HttpClientModule } from '@angular/common/http';
import { UppercasePipe } from './uppercase.pipe';
import { PipesComponent } from './fithDay/pipes/pipes.component';
import { ComponentAComponent } from './seventhDay/component-a/component-a.component';
import { ComponentBComponent } from './seventhDay/component-b/component-b.component';
import { DynamicContentComponent } from './seventhDay/dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayTwoComponent,
    ParentComponent,
    ChildComponent,
    UserFormComponent,
    TemplateDrivenFormComponent,
    HandlingHttpRequestComponent,
    UppercasePipe,
    PipesComponent,
    ComponentAComponent,
    ComponentBComponent,
    DynamicContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
